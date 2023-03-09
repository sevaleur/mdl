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
      ease: 0.05,
    }

    this.show_animation = false

    this.t_prefix = Prefix('transform')

    this.createGeometry()
    this.getElements()
    this.createMenu()
    this.createMenuSelector()

    this.onResize()

    this.group.setParent(this.scene)

    this.show()
  }

  createGeometry()
  {
    this.geo = new Plane(this.gl,
    {
      heightSegments: 10,
      widthSegments: 10
    })
  }

  getElements()
  {
    this.gallery_element = document.querySelector('.home__gallery')
    this.gallery_wrapper = document.querySelector('.home__gallery__wrapper')

    this.video_wrapper = document.querySelector('.home__gallery__vidwrap')
    this.image_wrapper = document.querySelector('.home__gallery__imgwrap')

    this.selector_videos = document.querySelector('.selectors__videos')
    this.selector_photos = document.querySelector('.selectors__photos')

    this.img_el = document.querySelectorAll('img.home__gallery__image__media__image')
    this.vid_el = document.querySelectorAll('img.home__gallery__video__media__image')

    this.vid_links = document.querySelectorAll('.home__gallery__video__link')
    this.img_links = document.querySelectorAll('.home__gallery__image__link')

    this.img_length = this.img_el.length
    this.vid_length = this.vid_el.length
  }

  createMenu()
  {
    this.video_elements = map(this.vid_el, (element, index) =>
    {
      return new ImageEl({
        element,
        index,
        link: this.vid_links[index],
        geometry: this.geo,
        gl: this.gl,
        length: this.vid_length,
        scene: this.group,
        screen: this.screen,
        viewport: this.viewport,
      })
    })

    this.image_elements = map(this.img_el, (element, index) =>
    {
      return new ImageEl({
        element,
        index,
        link: this.img_links[index],
        geometry: this.geo,
        gl: this.gl,
        length: this.img_length,
        scene: this.group,
        screen: this.screen,
        viewport: this.viewport,
      })
    })
  }

  createMenuSelector()
  {
    this.selector_videos.setAttribute('class', 'selectors__videos--active')

    this.selector_photos.addEventListener('click', () =>
    {
      const photo_tl = gsap.timeline()

      photo_tl.to(this.scroll,
      {
        target: -this.scroll.limit,
        duration: 1,
      }, 0)

      this.selector_videos.setAttribute('class', 'selectors__videos')
      this.selector_photos.setAttribute('class', 'selectors__photos--active')
    })

    this.selector_videos.addEventListener('click', () =>
    {
      const vid_tl = gsap.timeline()

      vid_tl.to(this.scroll,
        {
          target: 0,
          duration: 1,
        })

      this.selector_photos.setAttribute('class', 'selectors__photos')
      this.selector_videos.setAttribute('class', 'selectors__videos--active')
    })
  }

  /*
    Animations.
  */

  show()
  {
    let show_tl = gsap.timeline({
      onComplete: () =>
      {
        this.show_animation = true
      }
    })

    show_tl.set(this.scroll, { current: this.scroll.limit })

    show_tl.to(
      this.scroll,
      {
        taget: 0,
        duration: 1
      })

    map(this.image_elements, element => element.show())
    map(this.video_elements, element => element.show())
  }

  hide()
  {
    map(this.image_elements, element => element.hide())
    map(this.video_elements, element => element.hide())
  }

  /*
    Events.
  */

  onResize()
  {
    this.full_bounds = this.gallery_wrapper.getBoundingClientRect()

    map(this.image_elements, element => element.onResize({
      screen: this.screen,
      viewport: this.viewport,
    }))

    map(this.video_elements, element => element.onResize({
      screen: this.screen,
      viewport: this.viewport,
    }))

    this.scroll.limit = this.full_bounds.width - this.image_elements[0].element.clientWidth
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

  onWheel({ pixelY, pixelX })
  {
    //this.scroll.target -= pixelX * 0.5
  }

  /*
    Update.
  */

  update()
  {

    if(this.show_animation)
    {
      this.scroll.target = gsap.utils.clamp(-this.scroll.limit, 0, this.scroll.target)
      this.scroll.current = gsap.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.ease)
    }

    this.gallery_element.style[this.t_prefix] = `translateX(${this.scroll.current}px)`

    map(this.image_elements, element => element.update(this.scroll))
    map(this.video_elements, element => element.update(this.scroll))

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
