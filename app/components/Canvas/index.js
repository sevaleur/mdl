import { Camera, Renderer, Transform } from 'ogl'

import Project from './Project'

export default class Canvas
{
  constructor()
  {
    this.createRenderer()
    this.createCamera()
    this.createScene()

    this.onResize()
    this.createProject()
  }

  /*
    Create.
  */

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
      scene: this.scene,
      sizes: this.sizes
    })
  }

  /*
    Events.
  */

  onResize()
  {
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    this.camera.perspective({
      aspect: window.innerWidth / window.innerHeight
    })

    const fov = this.camera.fov * (Math.PI / 180)
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z
    const width = height * this.camera.aspect

    this.sizes = {
      height,
      width
    }

    if(this.project)
    {
      this.project.onResize({
        sizes: this.sizes
      })
    }
  }

  /*
    Loop.
  */

  update()
  {
    this.renderer.render({
      scene: this.scene,
      camera: this.camera
    })
  }
}
