import gsap from 'gsap'
import { Mesh, Program, Texture } from 'ogl'

import vertex from 'shaders/about/vertex.glsl'
import fragment from 'shaders/about/fragment.glsl'

export default class Media
{
  constructor({ element, index, geometry, gl, scene, screen, viewport })
  {
    this.element = element
    this.index = index
    this.geo = geometry
    this.gl = gl
    this.scene = scene
    this.screen = screen
    this.viewport = viewport

    this.time = 0

    this.createMesh()

    this.half = {
      _scale: {
        x: this.plane.scale.x / 2,
        y: this.plane.scale.y / 2
      },
      _viewport: {
        width: this.viewport.width / 2,
        height: this.viewport.height / 2
      },
      _screen: {
        width: this.screen.width / 2,
        height: this.screen.height / 2
      }
    }

    this.createBounds()
  }

  /*
    Create.
  */

  createMesh()
  {
    const image = new Image()
    const texture = new Texture(this.gl, {
      generateMipmaps: false
    })

    this.program = new Program(this.gl,
    {
      vertex,
      fragment,
      uniforms:
      {
        tMap: { value: texture },
        u_alpha: { value: 0.0 },
        u_time: { value: 0.0 },
        u_imageSize: { value: [0, 0] },
        u_planeSize: { value: [0, 0] },
        u_viewportSize: { value: [this.viewport.width, this.viewport.height] }
      }
    })

    image.crossOrigin = 'anonymous'
    image.src = this.element.getAttribute('data-src')
    image.onload = () =>
    {
      this.program.uniforms.u_imageSize.value = [image.naturalWidth, image.naturalHeight]
      texture.image = image
    }

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
    gsap.fromTo(this.program.uniforms.u_alpha,
    {
      value: 0.0,
      duration: 1
    },
    {
      value: 1.0,
      duration: 1
    })
  }

  hide()
  {
    gsap.to(this.program.uniforms.u_alpha,
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
    this.plane.scale.x = (this.viewport.width * this.bounds.width) / this.screen.width
    this.plane.scale.y = (this.viewport.height * this.bounds.height) / this.screen.height

    this.plane.program.uniforms.u_planeSize.value = [this.plane.scale.x, this.plane.scale.y]
  }

  updateX()
  {
    this.x = this.bounds.left / this.screen.width

    this.plane.position.x = -this.half._viewport.width + this.half._scale.x + (this.x * this.viewport.width)
  }

  updateY()
  {
    this.y = this.bounds.top / this.screen.height
    this.plane.position.y = this.half._viewport.height - this.half._scale.y - (this.y * this.viewport.height)
  }

  update()
  {
    if(!this.bounds) return

    this.time += 0.05

    this.program.uniforms.u_time.value = this.time

    this.updateScale()
    this.updateX()
    this.updateY()
  }
}
