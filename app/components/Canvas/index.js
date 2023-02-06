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
    this.onChange(this.template)
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
    Destroy.
  */

  destroyHome()
  {
    if(!this.home) return

    this.home.destroy()
    this.home = null
  }

  destroyGallery()
  {
    if(!this.gallery) return

    this.gallery.destroy()
    this.gallery = null
  }

  destroyAbout()
  {
    if(!this.about) return

    this.about.destroy()
    this.about = null
  }

  /*
    Events.
  */

  onChangeStart()
  {
    /* if(this.home)
      this.home.hide() */

    if(this.about)
      this.about.hide()

    if(this.gallery)
      this.gallery.hide()
  }

  onChange(template)
  {
    // template === 'home' ? this.createHome() : this.destroyHome()
    template === 'about' ? this.createAbout() : this.destroyAbout()
    template === 'gallery' ? this.createGallery() : this.destroyGallery()
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

    if(this.about)
    {
      this.about.onResize({
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

    if(this.about)
    {
      this.about.onTouchDown({
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

    if(this.about)
    {
      this.about.onTouchMove({
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

    if(this.about)
    {
      this.about.onTouchUp({
        y: this.y
      })
    }
  }

  onWheel(e)
  {
    if(this.gallery)
      this.gallery.onWheel(e)

    if(this.about)
      this.about.onWheel(e)
  }

  /*
    Loop.
  */

  update(scroll)
  {
    if(this.gallery)
      this.gallery.update()

    if(this.about)
      this.about.update(scroll)

    this.renderer.render({
      scene: this.scene,
      camera: this.camera
    })
  }
}
