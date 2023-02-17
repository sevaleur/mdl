import gsap from 'gsap'
import Splitting from 'splitting'

import Animation from 'classes/Animation'

export default class Title extends Animation
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
    this.chars = this.element.querySelectorAll('.char')
  }

  animateIn()
  {
    this.tl_in = gsap.timeline({
      delay: 0.5
    })

    this.tl_in.set(this.chars,
    {
      'willChange': 'opacity, transform',
      opacity: 0,
      y: '100%'
    })

    this.tl_in.fromTo(this.chars,
    {
      y: '100%'
    },
    {
      opacity: 1,
      duration: 1.,
      ease: 'back.inOut(2)',
      y: '0%',
      stagger: 0.03,
    }, 0)
  }

  animateOut()
  {
    gsap.set(this.chars,
    {
      opacity: 0,
      y: '100%'
    })
  }
}
