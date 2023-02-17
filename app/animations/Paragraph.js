import gsap from 'gsap'
import Splitting from 'splitting'

import Animation from 'classes/Animation'

export default class Paragraph extends Animation
{
  constructor({element, elements})
  {
    super({
      element,
      elements
    })

    this.element = element

    this.split = Splitting({
      target: this.element,
      by: 'lines'
    })

    this.init()
  }

  init()
  {
    this.lines = this.split[0].lines
  }

  animateIn()
  {
    this.tl_in = gsap.timeline({
      delay: 0.5
    })

    this.tl_in.set(this.lines,
    {
      'will-change': 'opacity, transform',
      opacity: 0,
      y: '100%'
    })

    this.tl_in.fromTo(this.lines,
    {
      opacity: 0,
      y: '100%'
    },
    {
      opacity: 1,
      duration: 1.,
      ease: 'expo.out',
      y: '0%',
      stagger: 0.03
    }, 0)

  }

  animateOut()
  {
    gsap.set(this.lines,
      {
        opacity: 0
      })
  }
}
