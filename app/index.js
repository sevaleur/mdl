import each from 'lodash/each'

import Preloader from 'components/Preloader'

import Home from 'pages/home'
import About from 'pages/about'
import Project from 'pages/project'



class App
{
  constructor()
  {
    this.createPreloader()
    this.createContent()
    this.createPages()

    this.addEventListeners()
    this.addLinkListeners()

    this.update()
  }

  createPreloader()
  {
    this.preloader = new Preloader()
    this.preloader.once('completed', this.onPreloaded.bind(this))
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
      project: new Project()
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
  }

  /*
    Loop.
  */

  update()
  {
    if(this.page && this.page.update)
      this.page.update()

    this.frame = window.requestAnimationFrame(this.update.bind(this))
  }

  /*
    Listeners.
  */

  addEventListeners()
  {
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
  }

}

new App()
