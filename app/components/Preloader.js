import each from 'lodash/each'
import gsap from 'gsap'
import Splitting from 'splitting'

import Component from "classes/Component"

export default class Preloader extends Component
{
  constructor()
  {
    super({
      element: '.preloader',
      elements: {
        title: '.preloader__text',
        number: '.preloader__number',
        numberText: '.preloader__number__text',
        images: document.querySelectorAll('img')
      }
    })

    Splitting({
      target: this.elements.title,
      by: 'chars'
    })

    Splitting({
      target: this.elements.numberText,
      by: 'chars'
    })

    this.length = 0

    this.createLoader()
  }

  createLoader()
  {
    each(this.elements.images, element =>
    {
      element.onload = _ => this.onAssetLoaded(element)
      element.src = element.getAttribute('data-src')
    })

    this.title_chars = this.elements.title.querySelectorAll('.char')
    this.number_chars = this.elements.numberText.querySelectorAll('.char')
  }

  onAssetLoaded(image)
  {
    this.length += 1

    const percent = this.length / this.elements.images.length

    this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`

    if(percent === 1)
    {
      this.onLoaded()
    }
  }

  onLoaded()
  {
    return new Promise(resolve =>
      {
        this.animateOut = gsap.timeline({
          delay: 2
        })

        this.animateOut.set(this.title_chars,
        {
          'willChange': 'opacity, transform',
          y: '0%',
          opacity: 1
        })

        this.animateOut.set(this.number_chars,
        {
          'willChange': 'opacity, transform',
          y: '0%',
          opacity: 1
        })

        this.animateOut.to(this.title_chars, {
          duration: 1.5,
          ease: 'expo.out',
          stagger: 0.1,
          y: '100%',
          opacity: 0
        })

        this.animateOut.to(this.number_chars, {
          duration: 1.5,
          ease: 'expo.out',
          stagger: 0.1,
          opacity: 0,
          y: '100%',
        }, '-=1.4')

        this.animateOut.to(this.element,
        {
          duration: 1.5,
          ease: 'expo.out',
          scaleY: 0,
          transformOrigin: '100% 100%'
        }, '-=1')

        this.animateOut.call(_ =>
        {
          this.emit('completed')
        })
      })
  }

  destroy()
  {
    this.element.parentNode.removeChild(this.element)
  }
}
