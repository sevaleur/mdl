import { Plane, Transform } from 'ogl'
import gsap from 'gsap'
import map from 'lodash/map'

import Media from './Media'

export default class About
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
      ease: 0.05
    }

    this.createGeometry()
    this.getElements()

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

  getElements()
  {
    this.elements = document.querySelectorAll('img')
  }

  createMedias()
  {
    this.media_elements = map(this.elements, (element, index) =>
    {
      return new Media({
        element,
        index,
        geometry: this.geo,
        gl: this.gl,
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
    map(this.media_elements, media => media.onResize({
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
    }
    else
    {
      this.direction = 'down'
    }

    const { current, last } = this.scroll

    map(this.media_elements, media => media.update(current))

    this.scroll.last = this.scroll.current
  }

  /*
    Destroy.
  */

  destroy()
  {
    //this.scene.remove(this.group)
  }
}
