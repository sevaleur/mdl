import { Mesh, Program, Texture } from 'ogl'
import gsap from 'gsap'

import vertex from 'shaders/home/element/vertex.glsl'
import fragment from 'shaders/home/element/fragment.glsl'

import Title from './Title'

export default class MenuElement
{
  constructor({ element, index, renderer, text, geometry, gl, length, scene, screen, viewport })
  {
    this.element = element
    this.index = index
    this.text = text
    this.geo = geometry
    this.gl = gl
    this.length = length
    this.scene = scene
    this.screen = screen
    this.viewport = viewport

    this.new_pos = 0

    this.createMesh()
    this.createTitle(renderer)
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
        u_scroll: { value: 0 },
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

  createTitle (renderer) {
    this.title = new Title({
      renderer,
      gl: this.gl,
      plane: this.plane,
      text: this.text,
      viewport: this.viewport
    })

    console.log(this.title)
  }

  createBounds()
  {
    this.bounds = this.element.getBoundingClientRect()

    this.wrap = document.querySelector('.home__gallery__wrapper')
    this.wrap_bounds = this.wrap.getBoundingClientRect()

    this.updateScale()
    this.updateX()
    this.updateY()

    this.plane.program.uniforms.u_planeSize.value = [this.plane.scale.x, this.plane.scale.y]

    this.full_width = ((this.wrap_bounds.width / this.screen.width) * this.viewport.width)
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
        this.title.program.uniforms.u_viewportSize.value = [this.viewport.width, this.viewport.height]
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

    //////////// an idea for gallery selection ////////////

   const scale = gsap.utils.mapRange(0, this.viewport.width / 2, 0, -.3, Math.abs(this.plane.position.x))

    this.plane.scale.x += scale
    this.plane.scale.y += scale
  }

  updateX(current=0)
  {
    this.x = (this.bounds.left - current) / this.screen.width
    const pos_viewport = this.plane.position.x - this.x / 100

    this.plane.program.uniforms.u_offset.value = gsap.utils.mapRange(-4, 4, -.35, .35, pos_viewport)

    this.plane.position.x = (this.viewport.width / 2) - (this.plane.scale.x / 2) - (this.x * this.viewport.width) + this.new_pos
  }

  updateY()
  {
    this.y = this.bounds.top / this.screen.height

    this.plane.position.y = (this.viewport.height / 2) - (this.plane.scale.y / 2) - (this.y * this.viewport.height)
    this.plane.position.y += Math.cos((this.plane.position.x / this.viewport.width) * Math.PI) * 1.25 - 1.25;
  }

  update(scroll, direction)
  {
    if(!this.bounds) return

    this.updateScale()
    this.updateX(scroll.current)
    this.updateY()

    this.plane.program.uniforms.u_scroll.value = ((scroll.current - scroll.last) / this.screen.width) * 30
    this.title.program.uniforms.u_scroll.value = ((scroll.current - scroll.last) / this.screen.width) * 30

    if(direction === 'up')
    {
      const x = this.plane.position.x + this.plane.scale.x

      if(x < -this.viewport.width / 2)
      {
        this.new_pos += this.full_width
      }
    }

    if(direction === 'down')
    {
      const x = this.plane.position.x - this.plane.scale.x

      if(x > this.viewport.width / 2)
      {
        this.new_pos -= this.full_width
      }
    }
  }
}
