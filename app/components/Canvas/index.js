import { Camera, Renderer, Transform } from 'ogl'

import Project from './Project'

export default class Canvas
{
  constructor()
  {
    this.createRenderer()
    this.createCamera()
    this.createScene()
    this.createProject()
  }

  createRenderer()
  {
    this.renderer = new Renderer()
    this.gl = this.renderer.gl

    document.body.appendChild(this.gl.canvas)
  }

  createCamera()
  {
    this.camera = new Camera(this.gl)

    this.camera.position.z = 5
  }

  createScene()
  {
    this.scene = new Transform()
  }

  createProject()
  {
    this.project = new Project({
      gl: this.gl,
      scene: this.scene
    })
  }

  onResize()
  {
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    this.camera.perspective({
      aspect: window.innerWidth / window.innerHeight
    })
  }

  update()
  {
    this.renderer.render({
      scene: this.scene,
      camera: this.camera
    })
  }
}
