import { Camera, Renderer, Transform } from 'ogl'

import Project from './Project'

export default class Canvas
{
  constructor()
  {
    this.x = {
      start: 0,
      distance: 0,
      end: 0
    }

    this.y = {
      start: 0,
      distance: 0,
      end: 0
    }

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
    this.renderer = new Renderer({
      alpha: true,
      antialias: true
    })

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

  onTouchDown(e)
  {
    this.isDown = true

    this.y.start = e.touches ? e.touches[0].clientY : e.clientY

    if(this.project)
    {
      this.project.onTouchDown({
        y: this.y
      })
    }
  }

  onTouchMove(e)
  {
    if(!this.isDown) return

    const y = e.touches ? e.touches[0].clientY : e.clientY

    this.y.end = y

    if(this.project)
    {
      this.project.onTouchMove({
        y: this.y
      })
    }
  }

  onTouchUp(e)
  {
    this.isDown = false

    const y = e.changedTouches ? e.changedTouches[0].clientY : e.clientY

    this.y.end = y

    if(this.project)
    {
      this.project.onTouchMove({
        y: this.y
      })
    }
  }

  onWheel(e)
  {
    if(this.project)
      this.project.onWheel(e)
  }

  /*
    Loop.
  */

  update()
  {
    if(this.project)
      this.project.update()

    this.renderer.render({
      scene: this.scene,
      camera: this.camera
    })
  }
}
