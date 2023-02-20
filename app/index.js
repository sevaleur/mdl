import each from 'lodash/each'
import normalizeWheel from 'normalize-wheel'

import Canvas from 'components/Canvas'
import Preloader from 'components/Preloader'
import Navigation from 'components/Navigation'

import Home from 'pages/home'
import About from 'pages/about'
import Gallery from 'pages/gallery'

export default class App
{
  static instance

  constructor()
  {
    if(App.instance)
      return App.instance

    App.instance = this

    this.createContent()

    this.createPreloader()
    this.createNavigation()
    this.createCanvas()
    this.createPages()

    this.addEventListeners()
    this.addLinkListeners()

    this.update()
  }

  /*
    Create.
  */

  createPreloader()
  {
    this.preloader = new Preloader()
    this.preloader.once('completed', this.onPreloaded.bind(this))
  }

  createNavigation()
  {
    this.navigation = new Navigation({
      template: this.template
    })
  }

  createCanvas()
  {
    this.canvas = new Canvas({
      template: this.template
    })
  }

  createContent()
  {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  createPages()
  {
    this.pages = {
      home: new Home(),
      about: new About(),
      gallery: new Gallery()
    }

    this.page = this.pages[this.template]
    this.page.create()
  }

  /*
    Events.
  */

  onPreloaded()
  {
    this.preloader.destroy()
    this.onResize()

    this.page.show()
  }

  async onChange(url)
  {
    this.canvas.onChangeStart()
    await this.page.hide()

    const req = await window.fetch(url)

    if(req.status === 200)
    {
      const html = await req.text()
      const div = document.createElement('div')

      div.innerHTML = html

      const divContent = div.querySelector('.content')

      this.template = divContent.getAttribute('data-template')

      this.content.setAttribute('data-template', this.template)
      this.content.innerHTML = divContent.innerHTML

      this.canvas.onChange(this.template)

      this.page = this.pages[this.template]
      this.page.create()

      this.onResize()
      this.page.show()

      this.addLinkListeners()
    }
    else
    {
      console.log('error')
    }
  }

  onResize()
  {
    if(this.page && this.page.onResize)
      this.page.onResize()

    window.requestAnimationFrame(() =>
    {
      if(this.canvas && this.canvas.onResize)
        this.canvas.onResize()
    })
  }

  onTouchDown(e)
  {
    if(this.canvas && this.canvas.onTouchDown)
      this.canvas.onTouchDown(e)
  }

  onTouchMove(e)
  {
    if(this.canvas && this.canvas.onTouchMove)
      this.canvas.onTouchMove(e)
  }

  onTouchUp(e)
  {
    if(this.canvas && this.canvas.onTouchUp)
      this.canvas.onTouchUp(e)
  }

  onWheel(e)
  {
    const norm_wheel = normalizeWheel(e)

    if(this.canvas && this.canvas.onWheel)
      this.canvas.onWheel(norm_wheel)

    if(this.page && this.page.onWheel)
      this.page.onWheel(norm_wheel)
  }

  /*
    Loop.
  */

  update()
  {
    if(this.page && this.page.update)
      this.page.update()

    if(this.canvas && this.canvas.update)
      this.canvas.update(this.page.scroll)

    this.frame = window.requestAnimationFrame(this.update.bind(this))
  }

  /*
    Listeners.
  */

  addEventListeners()
  {
    window.addEventListener('mousewheel', this.onWheel.bind(this))

    window.addEventListener('mousedown', this.onTouchDown.bind(this))
    window.addEventListener('mousemove', this.onTouchMove.bind(this))
    window.addEventListener('mouseup', this.onTouchUp.bind(this))

    window.addEventListener('touchstart', this.onTouchDown.bind(this))
    window.addEventListener('touchmove', this.onTouchMove.bind(this))
    window.addEventListener('touchend', this.onTouchUp.bind(this))

    window.addEventListener('resize', this.onResize.bind(this))
  }

  addLinkListeners()
  {
    const links = document.querySelectorAll('a')

    each(links, link =>
    {
      link.onclick = event =>
      {
        event.preventDefault()

        const { href } = link
        this.onChange(href)
      }
    })

    const outside_links = document.querySelectorAll('.outside__link')

    each(outside_links, link =>
    {
      link.onclick = event =>
      {
        window.open(link.children[0].href, '_blank')
      }
    })
  }
}

new App()
