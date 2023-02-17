import gsap from 'gsap'
import Splitting from 'splitting'

import Animation from 'classes/Animation'

export default class Vertical extends Animation
{
  constructor({element, elements})
  {
    super({
      element,
      elements
    })

    this.element = element

    Splitting({
      target: this.element,
      by: 'chars'
    })

    this.init()
  }

  init()
  {
    this.words = this.element.querySelectorAll('.char')
  }

  animateIn()
  {
    this.tl_in = gsap.timeline({
      delay: 0.5
    })

    this.tl_in.set(this.words,
    {
      'will-change': 'opacity',
      opacity: 0
    })

    this.tl_in.fromTo(this.words,
    {
      opacity: 0
    },
    {
      opacity: 1,
      ease: 'expo.out',
      duration: 1.5,
      stagger: 0.03
    })
  }

  animateOut()
  {
    gsap.set(this.words,
      {
        opacity: 0
      })
  }
}
