import { Mesh, Program, Texture } from 'ogl'
import gsap from 'gsap'

import vertex from 'shaders/gallery/vertex.glsl'
import fragment from 'shaders/gallery/fragment.glsl'

export default class MenuElement
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

    this.new_pos = 0

    this.createMesh()

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
        u_imageSize: { value: [0, 0] },
        u_planeSize: { value: [0, 0] },
        u_alpha: { value: 0.0 },
        u_offset: { value: 0 },
        u_strength: { value: 0 },
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

    this.menu_width = this.length * this.bounds.width
    this.full_width = ((this.menu_width / this.screen.width) * this.viewport.width)

    //this.pos_x = Math.cos(this.index) * ((this.screen.width / 2) / this.bounds.height)
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
    this.new_pos = 0

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

  updateX(current)
  {
    this.x = (this.bounds.left - current) / this.screen.width
    /* const pos_viewport = this.plane.position.x - this.x / 100

    this.plane.program.uniforms.u_offset.value = gsap.utils.mapRange(-4, 4, -.35, .35, pos_viewport) */

    this.plane.position.x = (-this.viewport.width / 2) + (this.plane.scale.x / 2) + (this.x * this.viewport.width) + this.new_pos
  }

  updateY()
  {
    this.y = this.bounds.top / this.screen.height

    this.plane.position.y = (this.viewport.height / 2) - (this.plane.scale.y / 2) - (this.y * this.viewport.height)
  }

  update(current, last, direction)
  {
    if(!this.bounds) return

    this.updateScale()
    this.updateX(current)
    this.updateY()

    this.plane.program.uniforms.u_strength.value = ((current - last) / this.screen.width) * 15

    if(direction === 'up')
    {
      const x = this.plane.position.x + this.plane.scale.x

      if(x < -this.viewport.width / 2)
      {
        this.new_pos += this.full_height
        console.log('nu')
      }
    }

    if(direction === 'down')
    {
      const x = this.plane.position.x - this.plane.scale.x

      if(x > this.viewport.width / 2)
      {
        this.new_pos -= this.full_height
      }
    }
  }
}
