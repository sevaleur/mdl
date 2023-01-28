import gsap from 'gsap'
import each from 'lodash/each'

import Animation from 'classes/Animation'

import { calculate, split } from 'utils/text'

export default class Label extends Animation
{
  constructor({element, elements})
  {
    super({
      element,
      elements
    })

    this.elementLinesSpan = split({
      element: this.element,
      append: true
    })

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
          autoAlpha: 0,
          y: '100%',
        },
        {
          autoAlpha: 1,
          delay: 0.5,
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
