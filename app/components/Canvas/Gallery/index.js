import { Plane, Transform } from 'ogl'
import gsap from 'gsap'
import map from 'lodash/map'

import GalleryElement from './objects/GalleryElement'
import Title from './objects/Title'

import Raycast from '../utils/Raycast'
import Raycasting from '../utils/Raycast'

export default class Gallery
{
  constructor({ gl, scene, screen, viewport, renderer, camera })
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

    this.createGeometry()
    this.getElements()
    this.onResize()
    this.createGallery()
    this.createTitle(renderer)

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
    this.elements = document.querySelectorAll('img.gallery__media__images__image')
    this.title_element = document.querySelector('.gallery__title__text')
    this.length = this.elements.length
  }

  createGallery()
  {
    this.gallery_elements = map(this.elements, (element, index) =>
    {
      return new GalleryElement({
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

  createTitle(renderer)
  {
    this.title = new Title({
      renderer,
      gl: this.gl,
      scene: this.group,
      text: this.title_element,
      viewport: this.viewport,
      screen: this.screen
    })
  }

  createRaycasting()
  {
    this.raycast = new Raycasting(this.gl, this.camera, this.gallery_elements)
  }

  /*
    Animations.
  */

  show()
  {
    map(this.gallery_elements, element => element.show())
    this.title.show()
  }

  hide()
  {
    map(this.gallery_elements, element => element.hide())
    this.title.hide()
  }

  /*
    Events.
  */

  onResize()
  {
    map(this.gallery_elements, element => element.onResize({
      screen: this.screen,
      viewport: this.viewport,
    }))
  }

  onTouchDown({ y })
  {
    this.scroll.position = this.scroll.current
  }

  onTouchMove({ y })
  {
    const y_dist = (y.start - y.end) * 2

    this.scroll.target = this.scroll.position + y_dist
  }

  onTouchUp({ y })
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

    const { current, last } = this.scroll

    map(this.gallery_elements, element => element.update(current, last, this.direction))
    this.title.update(current, last)

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

