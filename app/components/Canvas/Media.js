import { Mesh, Program, Texture } from 'ogl'

import vertex from 'shaders/plane-vertex.glsl'
import fragment from 'shaders/plane-fragment.glsl'

export default class Media
{
  constructor({ element, geometry, gl, index, scene })
  {
    this.element = element
    this.geo = geometry
    this.gl = gl
    this.index = index
    this.scene = scene

    this.createTexture()
    this.createProgram()
    this.createMesh()
  }

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
        u_map: { value: this.texture }
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

    this.mesh.position.x += this.index * this.mesh.scale.x
  }
}
