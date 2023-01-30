import { Mesh, Program, Texture } from 'ogl'
import gsap from 'gsap'

import vertex from 'shaders/plane-vertex.glsl'
import fragment from 'shaders/plane-fragment.glsl'

export default class Media
{
  constructor({ element, geometry, gl, index, scene, sizes })
  {
    this.element = element
    this.geo = geometry
    this.gl = gl
    this.index = index
    this.scene = scene
    this.sizes = sizes

    this.createTexture()
    this.createProgram()
    this.createMesh()
  }

  /*
    Create.
  */

  createTexture()
  {
    this.texture = new Texture(this.gl)

    this.image = new Image()
    this.image.crossOrigin = 'anonymous'
    this.image.src = this.element.getAttribute('data-src')
    this.image.onload = _ => { this.texture.image = this.image }

  }

  createProgram()
  {
    this.program = new Program(this.gl,
    {
      vertex,
      fragment,
      uniforms:
      {
        tMap: { value: this.texture },
        u_imageSize: { value: [this.image.naturalWidth, this.image.naturalHeight] },
        u_planeSizes: { value: [0, 0] },
        u_offset: { value: 0 }
      }
    })
  }

  createMesh()
  {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geo,
      program: this.program
    })

    this.mesh.setParent(this.scene)
  }

  createBounds({ sizes })
  {
    this.bounds = this.element.getBoundingClientRect()

    this.updateScale(sizes)
    this.updateX()
    this.updateY()
  }

  /*
    Events.
  */

  onResize(sizes)
  {
    this.createBounds(sizes)
  }

  /*
    Update.
  */

  updateScale()
  {
    this.height = this.bounds.height / window.innerHeight
    this.width = this.bounds.width / window.innerWidth

    this.mesh.scale.x = this.sizes.width * this.width
    this.mesh.scale.y = this.sizes.height * this.height

    this.targetScaleX = 0.83;
    this.targetScaleY = 1.3;

    this.program.uniforms.u_planeSizes.value = [this.mesh.scale.x, this.mesh.scale.y];
  }

  updateX(x = 0)
  {
    this.x = (this.bounds.left + x) / window.innerWidth

    this.mesh.position.x = (-this.sizes.width / 2) + (this.mesh.scale.x / 2) + (this.x * this.sizes.width)
  }

  updateY(y = 0, current)
  {
    this.y = (this.bounds.top + y) / window.innerHeight

    const positionInViewport = this.mesh.position.y - current / 100
    this.program.uniforms.u_offset.value = gsap.utils.mapRange(-4, 4, -0.35, 0.35, positionInViewport)

    this.mesh.position.y = (this.sizes.height / 2) - (this.mesh.scale.y / 2) - (this.y * this.sizes.height)
  }

  update(scroll, y)
  {
    if(!this.bounds) return

    this.updateX(scroll.x)
    this.updateY(scroll.y, y.current)
  }
}
