import { Plane, Transform } from 'ogl'
import gsap from 'gsap'
import map from 'lodash/map'

import Media from './Media'

export default class Project
{
  constructor({ gl, scene, screen, viewport })
  {
    this.gl = gl
    this.screen = screen
    this.viewport = viewport
    this.group = new Transform()

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      speed: 0.1,
      ease: 0.05,
    }

    this.createGeometry()
    this.createGallery()

    this.onResize()

    this.createMedias()

    this.group.setParent(scene)
  }

  createGeometry()
  {
    this.geo = new Plane(this.gl,
    {
      heightSegments: 10
    })
  }

  createGallery()
  {
    this.gallery = document.querySelector('.project__gallery__left')
    this.leftElements = document.querySelectorAll('img.project__gallery__left__media__image')
    this.rightElements = document.querySelectorAll('img.project__gallery__right__media__image')

    this.length = this.leftElements.length
  }

  createMedias()
  {
    this.leftColumn = map(this.leftElements, (element, index) =>
    {
      return new Media({
        element,
        index,
        geometry: this.geo,
        gl: this.gl,
        height: this.length,
        scene: this.group,
        screen: this.screen,
        viewport: this.viewport
      })
    })

    this.rightColumn = map(this.rightElements, (element, index) =>
    {
      return new Media({
        element,
        index,
        geometry: this.geo,
        gl: this.gl,
        height: this.length,
        scene: this.group,
        screen: this.screen,
        viewport: this.viewport
      })
    })
  }

  /*
    Events.
  */

  onResize()
  {
    this.galleryBounds = this.gallery.getBoundingClientRect()
    this.galleryHeight = this.galleryBounds.height / this.screen.height * this.viewport.height

    if(this.leftColumn)
    {
      map(this.leftColumn, media => media.onResize({
        height: this.length,
        screen: this.screen,
        viewport: this.viewport,
      }))
    }

    if(this.rightColumn)
    {
      map(this.rightColumn, media => media.onResize({
        height: this.length,
        screen: this.screen,
        viewport: this.viewport
      }))
    }
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
    if(!this.galleryBounds) return

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

    if(this.leftColumn)
    {
      map(this.leftColumn, media => media.update(current, last, this.direction))
    }

    if(this.rightColumn)
    {
      map(this.rightColumn, media => media.update(-current, last, this.direction))
    }

    this.scroll.last = this.scroll.current
  }
}
