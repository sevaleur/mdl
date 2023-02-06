import { Plane, Transform } from 'ogl'
import gsap from 'gsap'
import map from 'lodash/map'

import Media from './Media'

export default class About
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
      ease: 0.05
    }

    this.createGeometry()
    this.getElements()

    this.onResize()

    this.createMedias()

    this.group.setParent(this.scene)

    this.show()
  }

  createGeometry()
  {
    this.geo = new Plane(this.gl,
    {
      heightSegments: 100,
      widthSegments: 200
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
    Animations.
  */

  show()
  {
    map(this.media_elements, media => media.show())
  }

  hide()
  {
    map(this.media_elements, media => media.hide())
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

  }

  onTouchMove({ y })
  {

  }

  onTouchUp({ y })
  {

  }

  onWheel({ pixelY })
  {

  }

  /*
    Update.
  */

  update(scroll)
  {
    const current = (scroll.current / this.screen.height) * this.viewport.height

    this.group.position.y = current

    map(this.media_elements, media => media.update())
  }

  /*
    Destroy.
  */

  destroy()
  {
    this.scene.removeChild(this.group)
  }
}
