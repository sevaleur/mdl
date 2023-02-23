import { Plane, Transform } from 'ogl'
import gsap from 'gsap'

import map from 'lodash/map'
import Prefix from 'prefix'

import ImageEl from './menu/ImageEl'

export default class Gallery
{
  constructor({ gl, scene, screen, viewport, camera })
  {
    this.gl = gl
    this.scene = scene
    this.screen = screen
    this.viewport = viewport
    this.camera = camera

    this.group = new Transform()

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      speed: 0.1,
      ease: 0.05
    }

    this.t_prefix = Prefix('transform')

    this.createGeometry()
    this.getElements()
    this.createMenu()

    this.onResize()

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
    this.gallery_element = document.querySelector('.home__gallery')
    this.gallery_wrapper = document.querySelector('.home__gallery__wrapper')

    this.img_el = document.querySelectorAll('img.home__gallery__media__image')

    this.img_length = this.img_el.length
  }

  createMenu()
  {
    this.image_elements = map(this.img_el, (element, index) =>
    {
      return new ImageEl({
        element,
        index,
        geometry: this.geo,
        gl: this.gl,
        length: this.img_length,
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
    map(this.image_elements, element => element.show())
  }

  hide()
  {
    map(this.image_elements, element => element.hide())
  }

  /*
    Events.
  */

  onResize()
  {
    this.bounds = this.gallery_wrapper.getBoundingClientRect()

    map(this.image_elements, element => element.onResize({
      screen: this.screen,
      viewport: this.viewport,
    }))

    this.scroll.limit = this.bounds.width - this.image_elements[0].element.clientWidth
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
    this.scroll.target -= pixelY * 0.5
  }

  /*
    Update.
  */

  update()
  {
    this.scroll.target = gsap.utils.clamp(-this.scroll.limit, 0, this.scroll.target)
    this.scroll.current = gsap.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.ease)

    this.gallery_element.style[this.t_prefix] = `translateX(${this.scroll.current}px)`

    map(this.image_elements, element => element.update(this.scroll))

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
