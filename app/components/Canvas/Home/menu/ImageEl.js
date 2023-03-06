import { Mesh, Program } from 'ogl'
import gsap from 'gsap'

import Prefix from 'prefix'

import vertex from 'shaders/home/element/vertex.glsl'
import fragment from 'shaders/home/element/fragment.glsl'

export default class ImageEl
{
  constructor({ element, index, link, geometry, gl, length, scene, screen, viewport })
  {
    this.element = element
    this.index = index
    this.link = link
    this.geo = geometry
    this.gl = gl
    this.length = length
    this.scene = scene
    this.screen = screen
    this.viewport = viewport

    this.l_prefix = Prefix('transform')

    this.createMesh()
    this.createBounds()
  }

  /*
    Create.
  */

  createMesh()
  {
    this.texture = window.IMAGE_TEXTURES[this.element.getAttribute('data-src')]

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

    this.program.uniforms.u_imageSize.value = [this.texture.image.naturalWidth, this.texture.image.naturalHeight]

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

  updateScale()
  {
    this.plane.scale.x = this.viewport.width * this.bounds.width / this.screen.width
    this.plane.scale.y = this.viewport.height * this.bounds.height / this.screen.height

    this.plane.program.uniforms.u_planeSize.value = [this.plane.scale.x, this.plane.scale.y]
  }

  updateX(current=0)
  {
    this.x = (this.bounds.left + current) / this.screen.width
    const pos_viewport = this.plane.position.x + this.x / 100

    this.plane.program.uniforms.u_offset.value = gsap.utils.mapRange(-4, 4, -.35, .35, pos_viewport)

    this.plane.position.x = (-this.viewport.width / 2) + (this.plane.scale.x / 2) + (this.x * this.viewport.width)
  }

  updateY()
  {
    this.plane.position.y = gsap.utils.mapRange(-this.viewport.width, this.viewport.width, -Math.PI, Math.PI, this.plane.position.x)

    this.y = this.plane.position.y * this.screen.height
    this.link_pos = (this.y / this.viewport.height) + (-this.viewport.height / 2)

    this.link.style[this.l_prefix] = `translateY(${-this.link_pos}px)`
  }

  update(scroll)
  {
    if(!this.bounds) return

    this.updateScale()
    this.updateX(scroll.current)
    this.updateY()

    this.plane.program.uniforms.u_scroll.value = ((scroll.current - scroll.last) / this.screen.width) * 30
  }
}
