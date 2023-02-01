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
    this.mediaLeftElements = document.querySelectorAll('img.project__gallery__left__media__image')
    this.mediaRightElements = document.querySelectorAll('img.project__gallery__right__media__image')
  }

  createMedias()
  {
    this.mediasLeft = map(this.mediaLeftElements, (element, index) =>
    {
      return new Media({
        element,
        index,
        geometry: this.geo,
        gl: this.gl,
        height: this.galleryHeight,
        scene: this.group,
        screen: this.screen,
        viewport: this.viewport,
      })
    })

    this.mediasRight = map(this.mediaRightElements, (element, index) =>
    {
      return new Media({
        element,
        index,
        geometry: this.geo,
        gl: this.gl,
        height: this.galleryHeight,
        scene: this.group,
        screen: this.screen,
        viewport: this.viewport,
      })
    })
  }

  /*
    Events.
  */

  onResize()
  {
    this.galleryBounds = this.gallery.getBoundingClientRect()
    this.galleryHeight = this.viewport.height * this.galleryBounds.height / this.screen.height

    if(this.mediasLeft)
    {
      map(this.mediasLeft, media => media.onResize({
        height: this.galleryHeight,
        screen: this.screen,
        viewport: this.viewport
      }))
    }

    if(this.mediasRight)
    {
      map(this.mediasRight, media => media.onResize({
        height: this.galleryHeight,
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
    this.scroll.target += this.scroll.speed
    this.scroll.current = gsap.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.ease)

    if(this.scroll.current < this.scroll.last)
    {
      this.direction = 'up'
      this.scroll.speed = -0.1
    }
    else if(this.scroll.current > this.scroll.last)
    {
      this.direction = 'down'
      this.scroll.speed = 0.1
    }

    const { current, last } = this.scroll

    if(this.mediasLeft)
    {
      map(this.mediasLeft, media => media.update(current, last, this.direction))
    }

    if(this.mediasRight)
    {
      map(this.mediasRight, media => media.update(-current, last, this.direction))
    }

    this.scroll.last = this.scroll.current
  }
}
