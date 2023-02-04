import { Mesh, Program, Texture } from 'ogl'
import gsap from 'gsap'

import vertex from 'shaders/plane-vertex.glsl'
import fragment from 'shaders/plane-fragment.glsl'

export default class Media
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

    this.extra = {
      pos: 0,
      index: this.length
    }

    this.pos = {
      x: 0,
      y: 0,
      index: 0
    }

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

    const program = new Program(this.gl,
    {
      vertex,
      fragment,
      uniforms:
      {
        tMap: { value: texture },
        u_imageSize: { value: [0, 0] },
        u_planeSize: { value: [0, 0] },
        u_offset: { value: 0 },
        u_strength: { value: 0 },
        u_viewportSize: { value: [this.viewport.width, this.viewport.height] }
      }
    })

    image.crossOrigin = 'anonymous'
    image.src = this.element.getAttribute('data-src')
    image.onload = () =>
    {
      program.uniforms.u_imageSize.value = [image.naturalWidth, image.naturalHeight]
      texture.image = image
    }

    this.plane = new Mesh(this.gl, {
      geometry: this.geo,
      program: program
    })

    this.plane.setParent(this.scene)

    this.scale = {
      x: this.plane.scale.x / 2,
      y: this.plane.scale.y
    }

    this.margin = 1.5365
    this.wholeheight = this.length * (this.plane.scale.y + this.margin)

    this.pos.y = this.index <= this.length ?
      this.plane.position.y = this.index * this.margin
      : this.plane.position.y = this.extra.index * this.margin

    this.pos.index = this.index <= this.length ? this.index : this.extra.index
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
    Events.
  */

  onResize(sizes)
  {
    this.extra.pos = 0

    if(sizes)
    {
      const { height, screen, viewport } = sizes

      if(height) this.height = height
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

  updateX()
  {
    this.x = this.bounds.left / this.screen.width

    this.plane.position.x = (-this.viewport.width / 2) + this.scale.x + (this.x * this.viewport.width) + (Math.sin(this.pos.index) * this.margin)
  }

  updateY(current=0)
  {
    this.y = (this.bounds.top - current) / this.screen.height
    const pos_viewport = this.plane.position.y - this.y / 100

    this.plane.program.uniforms.u_offset.value = gsap.utils.mapRange(-4, 4, -0.35, 0.35, pos_viewport)

    this.plane.position.y = (this.viewport.height / 2) - (this.scale.y / 2) - (this.y * this.viewport.height) - this.pos.y - this.extra.pos
  }

  update(current, last, direction)
  {
    if(!this.bounds) return

    this.updateScale()
    this.updateX()
    this.updateY(current)

    if(current > 0)
    {
      this.plane.program.uniforms.u_strength.value = ((current - last) / this.screen.height) * 15

      if(direction === 'up')
      {
        const y = this.plane.position.y + this.scale.y

        if(y < -this.viewport.height / 2)
        {
          this.extra.index++
          this.extra.pos -= this.wholeheight
        }
      }

      if(direction === 'down')
      {
        const y = this.plane.position.y - this.scale.y

        if(y > this.viewport.height / 2)
        {
          this.extra.index++
          this.extra.pos += this.wholeheight
        }
      }
    }
    else
    {
      this.plane.program.uniforms.u_strength.value = -((current + last) / this.screen.height) * 15

      if(direction === 'up')
      {
        const y = this.plane.position.y - this.scale.y

        if(y > this.viewport.height / 2)
        {
          this.extra.index++
          this.extra.pos += this.wholeheight
        }
      }

      if(direction === 'down')
      {
        const y = this.plane.position.y + this.scale.y

        if(y < -this.viewport.height / 2)
        {
          this.extra.index++
          this.extra.pos -= this.wholeheight
        }
      }
    }
  }
}
