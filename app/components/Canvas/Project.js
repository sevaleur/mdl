import { Plane, Transform } from 'ogl'
import gsap from 'gsap'

import map from 'lodash/map'

import Media from './Media'

export default class Project
{
  constructor({ gl, scene, sizes })
  {
    this.gl = gl
    this.sizes = sizes
    this.group = new Transform()

    this.mediaElements = document.querySelectorAll('.project__gallery__media__image')

    this.createGeometry()
    this.createGallery()

    this.group.setParent(scene)

    this.x = {
      current: 0,
      target: 0,
      lerp: 0.1
    }

    this.y = {
      current: 0,
      target: 0,
      lerp: 0.1
    }

    this.scroll_current = {
      x: 0,
      y: 0
    }

    this.scroll = {
      x: 0,
      y: 0
    }
  }

  createGeometry()
  {
    this.geo = new Plane(this.gl)
  }

  createGallery()
  {
    this.medias = map(this.mediaElements, (element, index) =>
    {
      return new Media({
        element,
        geometry: this.geo,
        index,
        gl: this.gl,
        scene: this.group,
        sizes: this.sizes
      })
    })
  }

  /*
    Events.
  */

  onResize(event)
  {
    map(this.medias, media => media.onResize(event) )
  }

  onTouchDown({ x, y })
  {
    this.scroll_current.x = this.scroll.x
    this.scroll_current.y = this.scroll.y
  }

  onTouchMove({ x, y })
  {
    const x_dist = x.start - x.end
    const y_dist = y.start - y.end

    this.x.target = this.scroll_current.x - x_dist
    this.y.target = this.scroll_current.y - y_dist
  }

  onTouchUp({ x, y })
  {

  }

  /*
    Update.
  */

  update()
  {
    this.x.current = gsap.utils.interpolate(this.x.current, this.x.target, this.x.lerp)
    this.y.current = gsap.utils.interpolate(this.y.current, this.y.target, this.y.lerp)

    this.scroll.x = this.x.current
    this.scroll.y = this.y.current

    map(this.medias, media => media.update(this.scroll))
  }
}
