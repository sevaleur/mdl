import { Mesh, Program, Texture } from 'ogl'
import gsap from 'gsap'

import vertex from 'shaders/home/element/vertex.glsl'
import fragment from 'shaders/home/element/fragment.glsl'

export default class VideoEl
{
  constructor({ element, index, geometry, gl, length, scene, screen, viewport })
  {
    this.element = element
    this.index = index
    this.geo = geometry
    this.gl = gl
    this.length = length
    this.scene = scene
    this.screen = screen
    this.viewport = viewport

    this.createMesh()
    this.createBounds()
  }

  /*
    Create.
  */

  createMesh()
  {
    this.texture = new Texture(this.gl, {
      generateMipmaps: false
    })

    this.video = this.element
    this.video.crossOrigin = 'Anonymous'
    this.video.src = this.element.getAttribute('src')

    this.video.loop = true
    this.video.muted = true

    this.play()

    this.video.onload = () =>
    {
      this.texture.image = this.video
    }

    this.program = new Program(this.gl,
    {
      vertex,
      fragment,
      uniforms:
      {
        tMap: { value: this.texture },
        u_imageSize: { value: [0, 0] },
        u_planeSize: { value: [0, 0] },
        u_alpha: { value: 0.0 },
        u_offset: { value: 0 },
        u_scroll: { value: 0 },
        u_progress: { value: 0.0 },
        u_viewportSize: { value: [this.viewport.width, this.viewport.height] }
      }
    })

    this.plane = new Mesh(this.gl, {
      geometry: this.geo,
      program: this.program
    })

    this.plane.setParent(this.scene)
  }

  createBounds()
  {
    this.bounds = this.element.getBoundingClientRect()

    this.updateScale()
    this.updateX()
    this.updateY()

    this.plane.program.uniforms.u_planeSize.value = [this.plane.scale.x, this.plane.scale.y]
  }

  /*
    Animations.
  */

  show()
  {
    gsap.fromTo(
      this.program.uniforms.u_alpha,
    {
      value: 0.0
    },
    {
      value: 1.0,
      duration: 1,
    })
  }

  hide()
  {
    gsap.to(
      this.program.uniforms.u_alpha,
    {
      value: 0.0,
      duration: 1
    })
  }

  /*
    Events.
  */

  onResize(sizes)
  {
    if(sizes)
    {
      const { screen, viewport } = sizes

      if(screen) this.screen = screen
      if(viewport) {
        this.viewport = viewport

        this.plane.program.uniforms.u_viewportSize.value = [this.viewport.width, this.viewport.height]
      }
    }

    this.createBounds()
  }

  /*
    Update.
  */

  play()
  {
    this.video.play()
  }

  pause()
  {
    this.video.pause()
  }

  updateScale()
  {
    this.plane.scale.x = (this.viewport.width * this.bounds.width / this.screen.width)
    this.plane.scale.y = this.viewport.height * this.bounds.height / this.screen.height

    this.plane.program.uniforms.u_planeSize.value = [this.plane.scale.x, this.plane.scale.y]
    this.program.uniforms.u_imageSize.value = [this.video.videoWidth, this.video.videoHeight]
  }

  updateX(current=0)
  {
    this.x = (this.bounds.left + current) / this.screen.width
    const pos_viewport = this.plane.position.x - this.x / 100

    this.plane.program.uniforms.u_offset.value = gsap.utils.mapRange(-4, 4, -.35, .35, pos_viewport)

    this.plane.position.x = (-this.viewport.width / 2) + (this.plane.scale.x / 2) + (this.x * this.viewport.width)
  }

  updateY()
  {
    this.y = this.bounds.top / this.screen.height

    this.plane.position.y = (this.viewport.height / 2) - (this.plane.scale.y / 2) - (this.y * this.viewport.height)
    //this.plane.position.y += Math.cos((this.plane.position.x / this.viewport.width) * Math.PI) * .5 - .5;
  }

  update(scroll)
  {
    if(!this.bounds) return

    if (this.video.readyState >= this.video.HAVE_ENOUGH_DATA)
    {
      if (!this.texture.image) this.texture.image = this.video
      this.texture.needsUpdate = true
    }

    this.updateScale()
    this.updateX(scroll.current)
    this.updateY()

    this.plane.program.uniforms.u_scroll.value = ((scroll.current - scroll.last) / this.screen.width) * 30
  }
}
