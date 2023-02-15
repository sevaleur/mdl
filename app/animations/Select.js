

import Splitting from 'splitting'

import gsap from 'gsap'

export default class Select
{
  constructor(elements)
  {
    this.elements = elements

    this.init()
  }

  init()
  {
    Splitting({
      target: this.elements,
      by: 'chars'
    })
  }

  onHover(index)
  {
    this.target = this.elements[index]
    this.chars = this.target.querySelectorAll('.char')

    this.animate_in()
  }

  onLeave()
  {
    this.animate_out()
  }

  animate_in()
  {
    gsap.set(this.chars,
    {
      'will-change': 'opacity, transform',
      opacity: 0,
      yPercent: 120,
      scaleY: 2.3,
      scaleX: 0.7,
      transformOrigin: '50% 0%'
    })

    gsap.to(this.chars,
    {
      duration: 1,
      ease: 'back.inOut(2)',

      opacity: 1,
      yPercent: 0,
      scaleY: 1,
      scaleX: 1,
      stagger: 0.03,
    })
  }

  animate_out()
  {
    gsap.to(this.chars,
    {
      duration: 1,
      ease: 'back.inOut(2)',

      opacity: 0,
      yPercent: 120,
      scaleY: 2.3,
      scaleX: 0.7,
      stagger: 0.03,
    })
  }
}
