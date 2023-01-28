import gsap from 'gsap'

import normalizeWheel from 'normalize-wheel'

import each from 'lodash/each'
import map from 'lodash/map'

import Prefix from 'prefix'

import Title from 'animations/Title'
import Paragraph from 'animations/Paragraph'
import Label from 'animations/Label'
import Vertical from 'animations/Vertical'

import AsyncLoad from 'classes/AsyncLoad'
import { ColorManager } from 'classes/Colors'

export default class Page
{
  constructor({ element, elements, id })
  {
    this.selector = element
    this.selectorChildren = {
      ...elements,
      animationTitles: `[data-animation="title"]`,
      animationParagraphs: `[data-animation="paragraph"]`,
      animationLabel: `[data-animation="label"]`,
      animationVertical: `[data-animation="vertical"]`,

      images: `[data-src]`
    }

    this.id = id

    this.transform_prefix = Prefix('transform')

    this.onMouseWheelEvent = this.onMouseWheel.bind(this)
  }

  /*
    Create.
  */

  create()
  {
    this.element = document.querySelector(this.selector)
    this.elements = {}

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0
    }

    each(this.selectorChildren, (entry, key) =>
    {
      if(entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry))
      {
        this.elements[key] = entry
      }
      else
      {
        this.elements[key] = document.querySelectorAll(entry)

        if(this.elements[key].length === 0)
        {
          this.elements[key] = null
        }
        else if(this.elements[key].length === 1)
        {
          this.elements[key] = document.querySelector(entry)
        }
      }
    })

    this.createAnimations()
    this.preloadImages()
  }

  /*
    Content animations.
  */

  createAnimations()
  {
    this.animations = []

    /*
      Titles.
    */
    this.animationTitles = map(this.elements.animationTitles, element =>
    {
      return new Title({
        element
      })
    })

    this.animations.push(...this.animationTitles)

    /*
      Paragraphs.
    */
    this.animationParagraphs = map(this.elements.animationParagraphs, element =>
    {
      return new Paragraph({
        element
      })
    })

    this.animations.push(...this.animationParagraphs)

    /*
      Labels.
    */
    this.animationLabel = map(this.elements.animationLabel, element =>
    {
      return new Label({
        element
      })
    })

    this.animations.push(...this.animationLabel)

    /*
      Vertical text.
    */
    this.animationVertical = map(this.elements.animationVertical, element =>
    {
      return new Vertical({
        element
      })
    })

    this.animations.push(...this.animationVertical)

  }

  /*
    Page animation.
  */

  preloadImages()
  {
    this.images = map(this.elements.images, element =>
    {
      return new AsyncLoad({ element })
    })
  }

  show()
  {
    return new Promise(resolve =>
    {
      ColorManager.change({
        backgroundColor: this.element.getAttribute('data-background'),
        color: this.element.getAttribute('data-color')
      })

      this.animateIn = gsap.timeline()

      this.animateIn.fromTo(this.element,
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        onComplete: resolve
      })

      this.animateIn.call(_ =>
      {
        this.addEventListeners()

        resolve()
      })
    })
  }

  hide()
  {
    return new Promise(resolve =>
    {
      this.removeEventListeners()

      this.animateOut = gsap.timeline()

      this.animateOut.to(this.element,
      {
        autoAlpha: 0,
        onComplete: resolve
      })
    })
  }

  /*
    Events.
  */

  onMouseWheel(e)
  {
    const { pixelY } = normalizeWheel(e)

    this.scroll.target += pixelY
  }

  onResize()
  {
    if(this.elements.wrapper)
      this.scroll.limit = this.elements.wrapper.clientHeight - window.innerHeight

    each(this.animations, animation => animation.onResize())
  }

  /*
    Loop.
  */

  update()
  {
    this.scroll.target = gsap.utils.clamp(0, this.scroll.limit, this.scroll.target)

    this.scroll.current = gsap.utils.interpolate(this.scroll.current, this.scroll.target, 0.1)

    if(this.scroll.current < 0.01)
      this.scroll.current = 0

    if(this.elements.wrapper)
      this.elements.wrapper.style[this.transform_prefix] = `translateY(-${this.scroll.current}px)`
  }

  /*
    Listeners.
  */

  addEventListeners()
  {
    window.addEventListener('mousewheel', this.onMouseWheelEvent)
  }

  removeEventListeners()
  {
    window.removeEventListener('mousewheel', this.onMouseWheelEvent)
  }

}
