import { Camera, Renderer, Transform } from 'ogl'

import Gallery from './Gallery'
import About from './About'

export default class Canvas
{
  constructor({ template })
  {

    this.template = template

    this.y = {
      start: 0,
      distance: 0,
      end: 0
    }

    this.createRenderer()
    this.createCamera()
    this.createScene()

    this.onResize()
    this.onRoute(this.template)
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

  createHome()
  {
    this.home = new Home({
      gl: this.gl,
      scene: this.scene,
      screen: this.screen,
      viewport: this.viewport
    })
  }

  createGallery()
  {
    this.gallery = new Gallery({
      gl: this.gl,
      scene: this.scene,
      screen: this.screen,
      viewport: this.viewport
    })
  }

  createAbout()
  {
    this.about = new About({
      gl: this.gl,
      scene: this.scene,
      screen: this.screen,
      viewport: this.viewport
    })
  }

  /*
    Events.
  */

  onRoute(template)
  {
    if(template === 'home')
    {
      //this.createHome()
    }
    else if(this.home)
    {
      this.home.destroy()
      this.home = null
    }

    if(template === 'about')
    {
      this.createAbout()
    }
    else if(this.about)
    {
      this.about.destroy()
      this.about = null
    }

    if(template === 'gallery')
    {
      this.createGallery()
    }
    else if(this.gallery)
    {
      this.gallery.destroy()
      this.gallery = null
    }
  }

  onResize()
  {
    this.screen = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    this.renderer.setSize(this.screen.width, this.screen.height)

    this.camera.perspective({
      aspect: this.screen.width / this.screen.height
    })

    const fov = this.camera.fov * (Math.PI / 180)
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z
    const width = height * this.camera.aspect

    this.viewport = {
      width,
      height
    }

    if(this.gallery)
    {
      this.gallery.onResize({
        screen: this.screen,
        viewport: this.viewport
      })
    }
  }

  onTouchDown(e)
  {
    this.isDown = true

    this.y.start = e.touches ? e.touches[0].clientY : e.clientY

    if(this.gallery)
    {
      this.gallery.onTouchDown({
        y: this.y
      })
    }
  }

  onTouchMove(e)
  {
    if(!this.isDown) return

    const y = e.touches ? e.touches[0].clientY : e.clientY

    this.y.end = y

    if(this.gallery)
    {
      this.gallery.onTouchMove({
        y: this.y
      })
    }
  }

  onTouchUp(e)
  {
    this.isDown = false

    if(this.gallery)
    {
      this.gallery.onTouchUp({
        y: this.y
      })
    }
  }

  onWheel(e)
  {
    if(this.gallery)
      this.gallery.onWheel(e)
  }

  /*
    Loop.
  */

  update()
  {
    if(this.gallery)
      this.gallery.update()

    this.renderer.render({
      scene: this.scene,
      camera: this.camera
    })
  }
}
