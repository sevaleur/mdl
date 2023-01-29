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

    this.y = {
      current: 0,
      target: 0,
      lerp: 0.1,
    }

    this.scroll_current = {
      y: 0
    }

    this.scroll = {
      current: 0,
      y: 0,
      target: 0,
      limit: 0
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
    this.sizes = event.sizes

    map(this.medias, media => media.onResize(event) )
  }

  onTouchDown({ y })
  {
    this.scroll_current.y = this.scroll.y
  }

  onTouchMove({ y })
  {
    const y_dist = y.start - y.end

    this.y.target = this.scroll_current.y - y_dist
  }

  onTouchUp({ y })
  {

  }

  onWheel({ pixelY })
  {
    this.y.target -= pixelY
  }

  /*
    Update.
  */

  update()
  {
    this.y.current = gsap.utils.interpolate(this.y.current, this.y.target, this.y.lerp)

    if(this.scroll.y < this.y.current)
    {
      this.y.direction = 'top'
    }
    else if(this.scroll.y > this.y.current)
    {
      this.y.direction = 'bottom'
    }

    this.scroll.y = this.y.current

    map(this.medias, (media, index) =>
    {
      const scale_y = media.mesh.scale.y / 2

      if(this.y.direction === 'top')
      {
        const y = media.mesh.position.y + scale_y

        if(y > -this.sizes.height / 2)
        {
          this.y.target = gsap.utils.clamp(0, 1, this.y.target)
        }
      }
      else if(this.y.direction === 'bottom')
      {
        const y = media.mesh.position.y - scale_y

        if(y < this.sizes.height / 2)
        {

        }
      }

      media.update(this.scroll)
    })
  }
}
