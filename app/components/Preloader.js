import each from 'lodash/each'
import gsap from 'gsap'
import Splitting from 'splitting'

import Component from "classes/Component"

import { COLOR_CULTURED, COLOR_CADET_BLUE_CRAYOLA, COLOR_BLACK_CORAL } from '../utils/color_variables'

export default class Preloader extends Component
{
  constructor()
  {
    super({
      element: '.preloader',
      elements: {
        numberText: '.preloader__number__text',
        svg: 'svg',

        images: document.querySelectorAll('img'),
      }
    })

    Splitting({
      target: this.elements.numberText,
      by: 'chars'
    })

    this.length = 0
    this.finished = false

    this.tl = gsap.timeline({
      onComplete: () => {
        this.finished = true

        if(this.percent === 1 && this.finished)
          this.onLoaded()
      }
    })

    this.createLoader()

    const paths = document.querySelectorAll('path')
    each(paths, p => this.loading(p))
  }

  createLoader()
  {
    each(this.elements.images, element =>
    {
      element.onload = () => this.onAssetLoaded(element)
      element.src = element.getAttribute('data-src')
    })

    this.number_chars = this.elements.numberText.querySelectorAll('.char')
  }

  onAssetLoaded(image)
  {
    this.length += 1

    this.percent = this.length / this.elements.images.length

    this.elements.numberText.innerHTML = `${Math.round(this.percent * 100)}`

    if(this.percent === 1 && this.finished)
      this.onLoaded()
  }

  loading(p)
  {
    const colors = [COLOR_CADET_BLUE_CRAYOLA, COLOR_BLACK_CORAL, COLOR_CULTURED]

    this.svg_path = p
    const delay = Math.random()
    const length = this.svg_path.getTotalLength()

    each(colors, (color, index) =>
    {
      this.tl.set(this.svg_path,
      {
        strokeDasharray: length + 0.5,
        strokeDashoffset: length + 0.6,
        fill: '#000000',
        autoRound: false
      }, 0)

      this.tl.to(this.svg_path,
      {
        strokeDashoffset: 0,
        autoRound: false,
        fill: '#EEF1EF',
        duration: 2.,
        ease: `power3.out`
      }, index * 0.25 + delay)

      this.svg_path.setAttribute('stroke', color)
    })
  }

  onLoaded()
  {
    return new Promise(resolve =>
    {
      this.animateOut = gsap.timeline({
        delay: 1
      })

      this.animateOut.to(this.element,
      {
        duration: 1.5,
        ease: 'expo.out',
        opacity: 0,
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
