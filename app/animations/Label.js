import gsap from 'gsap'
import Splitting from 'splitting'

import Animation from 'classes/Animation'

export default class Label extends Animation
{
  constructor({element, elements})
  {
    super({
      element,
      elements
    })

    Splitting({
      target: this.element,
      by: 'words'
    })

    this.init()
  }

  init()
  {
    this.words = this.element.querySelectorAll('.word')
  }

  animateIn()
  {
    this.tl_in = gsap.timeline({
      delay: 0.5
    })

    this.tl_in.set(this.words,
    {
      'willChange': 'opacity, transform',
      opacity: 0,
      y: '100%'
    })

    this.words.forEach(word =>
    {
      this.tl_in.fromTo(word,
        {
          opacity: 0,
          y: '100%',
        },
        {
          opacity: 1,
          duration: 1.,
          ease: 'expo.out',
          y: '0%',
          stagger: 0.03
        }, 0)
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
