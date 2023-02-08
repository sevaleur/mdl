import { Color, Text, Geometry, Mesh, Program, Texture } from 'ogl'

import font from '/fonts/forma.json'
import src from '/fonts/forma.png'

import vertex from 'shaders/home/text/vertex.glsl'
import fragment from 'shaders/home/text/fragment.glsl'

export default class Title
{
  constructor({ renderer, gl, plane, text, viewport })
  {
    this.gl = gl
    this.plane = plane
    this.renderer = renderer
    this.text = text
    this.viewport = viewport

    this.createShader()
    this.createMesh()
  }

  createShader()
  {
    const texture = new Texture(this.gl, { generateMipmaps: false })
    const texture_image = new Image()

    texture_image.src = src
    texture_image.onload = () => texture.image = texture_image

    const vertex100 =
      /* glsl */ `
  ` + vertex;

  const fragment100 =
      /* glsl */ `#extension GL_OES_standard_derivatives : enable
      precision highp float;
  ` + fragment;

  const vertex300 =
      /* glsl */ `#version 300 es
      #define attribute in
      #define varying out
  ` + vertex;

  const fragment300 =
      /* glsl */ `#version 300 es
      precision highp float;
      #define varying in
      #define texture2D texture
      #define gl_FragColor FragColor
      out vec4 FragColor;
  ` + fragment;

    let fShader = fragment100
    let vShader = vertex100

    if(this.renderer.isWebgl2)
    {
      fShader = fragment300
      vShader = vertex300
    }

    this.program = new Program(this.gl, {
      cullFace: null,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      fragment: fShader,
      vertex: vShader,
      uniforms: {
        u_color: { value: new Color('#EEF1EF') },
        u_scroll: { value: 0.0 },
        u_viewportSize: { value: [this.viewport.width, this.viewport.height] },
        tMap: { value: texture },
      }
    })
  }

  createMesh()
  {
    const text = new Text({
      align: 'center',
      font,
      letterSpacing: -0.05,
      size: 0.1,
      text: this.text.innerHTML,
      wordSpacing: 0
    })

    const geo = new Geometry(this.gl, {
      position: { size: 3, data: text.buffers.position },
      uv: { size: 2, data: text.buffers.uv },
      id: { size: 1, data: text.buffers.id },
      index: { data: text.buffers.index }
    })

    geo.computeBoundingBox()

    this.mesh = new Mesh(this.gl, {geometry: geo, program: this.program})
    this.mesh.position.x = -this.plane.scale.x * 0.5 - 0.15
    this.mesh.rotation.z = Math.PI * 0.5
    this.mesh.setParent(this.plane)
  }
}
