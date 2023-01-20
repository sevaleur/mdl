import gsap from 'gsap'
import each from 'lodash/each'

import Animation from 'classes/Animation'

import { calculate, split } from 'utils/text'

export default class Title extends Animation
{
  constructor({element, elements})
  {
    super({
      element,
      elements
    })

    split({
      element: this.element
    })

    split({
      element: this.element
    })

    this.elementLinesSpan = document.querySelectorAll('span span')
  }

  animateIn()
  {
    this.tl_in = gsap.timeline({
      delay: 0.5
    })

    this.tl_in.set(this.element,
    {
      autoAlpha: 1
    })

    each(this.elementLines, (line, index) =>
    {
      this.tl_in.fromTo(line,
        {
          y: '100%'
        },
        {
          delay: index * 0.2,
          duration: 1.,
          ease: 'expo.out',
          y: '0%'
        }, 0)
    })

  }

  animateOut()
  {
    gsap.set(this.element,
      {
        autoAlpha: 0
      })
  }

  onResize()
  {
    this.elementLines = calculate(this.elementLinesSpan)
  }
}
