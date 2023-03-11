import { Mesh, Program } from 'ogl'
import gsap from 'gsap'

import vertex from 'shaders/gallery/element/vertex.glsl'
import fragment from 'shaders/gallery/element/fragment.glsl'

export default class GalleryElement
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
        u_viewportSize: { value: [this.viewport.width, this.viewport.height] }
      }
    })

    this.a_r = this.texture.image.naturalHeight / this.texture.image.naturalWidth
    this.target_height = this.a_r * 300
    this.target_width = this.a_r * this.new_height

    this.program.uniforms.u_imageSize.value = [this.texture.image.naturalWidth, this.texture.image.naturalHeight]

    this.plane = new Mesh(this.gl, {
      geometry: this.geo,
      program: this.program
    })

    this.plane.index = this.index

    this.plane.setParent(this.scene)
  }

  createBounds()
  {
    this.bounds = this.element.getBoundingClientRect()

    this.updateScale()
    this.updateX()
    this.updateY()

    this.plane.program.uniforms.u_planeSize.value = [this.plane.scale.x, this.plane.scale.y]

    this.gallery_height = this.length * this.bounds.height
    this.full_height = ((this.gallery_height / this.screen.height) * this.viewport.height)
    this.new_pos += this.full_height

    this.pos_x = Math.cos(-this.index + Math.PI) * ((this.screen.width / 2) / this.bounds.height)
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

  updateX()
  {
    this.x = this.bounds.left / this.screen.width

    this.plane.position.x = (-this.viewport.width / 2) + (this.plane.scale.x / 2) + (this.x * this.viewport.width) + this.pos_x
  }

  updateY(current=0)
  {
    this.y = (this.bounds.top - current) / this.screen.height
    const pos_viewport = this.plane.position.y - this.y / 100

    this.plane.program.uniforms.u_offset.value = gsap.utils.mapRange(-this.viewport.height, this.viewport.height, -0.35, 0.35, pos_viewport)

    this.plane.position.y = (this.viewport.height / 2) - (this.plane.scale.y / 2) - (this.y * this.viewport.height) + this.new_pos
  }

  update(current, last, direction)
  {
    if(!this.bounds) return

    this.updateScale()
    this.updateX()
    this.updateY(current)

    this.plane.program.uniforms.u_scroll.value = ((current - last) / this.screen.height) * 15

    if(direction === 'up')
    {
      const y = this.plane.position.y + this.plane.scale.y

      if(y < -this.viewport.height / 2)
      {
        this.new_pos += this.full_height
      }
    }

    if(direction === 'down')
    {
      const y = this.plane.position.y - this.plane.scale.y

      if(y > this.viewport.height / 2)
      {
        this.new_pos -= this.full_height
      }
    }
  }
}
