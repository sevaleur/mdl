import gsap from 'gsap'

import Animation from 'classes/Animation'

export default class Vertical extends Animation
{
  constructor({element, elements})
  {
    super({
      element,
      elements
    })
  }

  animateIn()
  {
    this.tl_in = gsap.timeline({
      delay: 0.5
    })

    this.tl_in.fromTo(this.element,
    {
      autoAlpha: 0,
      scale: 1.2
    },
    {
      autoAlpha: 1,
      scale: 1,
      ease: 'expo.out',
      duration: 1.5,
    })
  }

  animateOut()
  {
    gsap.set(this.element,
      {
        autoAlpha: 0
      })
  }
}
