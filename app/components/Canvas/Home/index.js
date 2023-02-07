import { Plane, Transform } from 'ogl'
import gsap from 'gsap'
import map from 'lodash/map'

import MenuElement from './MenuElement'

export default class Gallery
{
  constructor({ gl, scene, screen, viewport })
  {
    this.gl = gl
    this.scene = scene
    this.screen = screen
    this.viewport = viewport
    this.group = new Transform()

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      speed: 0.1,
      ease: 0.05
    }

    this.createGeometry()
    this.getElements()

    this.onResize()

    this.createMenu()

    this.group.setParent(this.scene)

    this.show()
  }

  createGeometry()
  {
    this.geo = new Plane(this.gl,
    {
      heightSegments: 10
    })
  }

  getElements()
  {
    this.elements = document.querySelectorAll('img.home__gallery__media__image')
    this.length = this.elements.length
  }

  createMenu()
  {
    this.menu_elements = map(this.elements, (element, index) =>
    {
      return new MenuElement({
        element,
        index,
        geometry: this.geo,
        gl: this.gl,
        length: this.length,
        scene: this.group,
        screen: this.screen,
        viewport: this.viewport
      })
    })
  }

  /*
    Animations.
  */

  show()
  {
    map(this.menu_elements, element => element.show())
  }

  hide()
  {
    map(this.menu_elements, element => element.hide())
  }

  /*
    Events.
  */

  onResize()
  {
    map(this.menu_elements, element => element.onResize({
      screen: this.screen,
      viewport: this.viewport,
    }))
  }

  onTouchDown({ y, x })
  {
    this.scroll.position = this.scroll.current
  }

  onTouchMove({ y, x })
  {
    const x_dist = x.start - x.end

    this.scroll.target = this.scroll.position - x_dist
  }

  onTouchUp({ y, x })
  {

  }

  onWheel({ pixelY })
  {
    this.scroll.target += pixelY * 0.5
  }

  /*
    Update.
  */

  update()
  {
    this.scroll.target += this.scroll.speed
    this.scroll.current = gsap.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.ease)

    if(this.scroll.current < this.scroll.last)
    {
      this.direction = 'up'
      this.scroll.speed = -0.1
    }
    else
    {
      this.direction = 'down'
      this.scroll.speed = 0.1
    }

    map(this.menu_elements, element => element.update(this.scroll, this.direction))

    this.scroll.last = this.scroll.current
  }

  /*
    Destroy.
  */

  destroy()
  {
    this.scene.removeChild(this.group)
  }
}
