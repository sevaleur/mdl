import { Texture } from 'ogl'
import gsap from 'gsap'

import Component from "classes/Component"

import { COLOR_CULTURED, COLOR_CADET_BLUE_CRAYOLA, COLOR_BLACK_CORAL } from '../utils/color_variables'

export default class Preloader extends Component
{
  constructor({ canvas })
  {
    super({
      element: '.preloader',
      elements: {
        numberText: '.preloader__number__text',
      }
    })

    this.canvas = canvas

    this.length = 0

    window.IMAGE_TEXTURES = {}

    this.createLoader()
    this.createLogo()
  }

  createLoader()
  {
    window.ASSETS.forEach(image =>
    {
      const texture = new Texture(this.canvas.gl, {
        generateMipmaps: false
      })

      const media = new window.Image()
      media.crossOrigin = 'Anonymous'
      media.src = image
      media.onload = () =>
      {
        texture.image = media

        this.onAssetLoaded()
      }

      window.IMAGE_TEXTURES[image] = texture
    })
  }

  createLogo()
  {
    this.tl = gsap.timeline()

    const paths = document.querySelectorAll('path')
    paths.forEach(path => this.drawLogo(path))
  }

  onAssetLoaded(image)
  {
    this.length += 1

    this.percent = this.length / window.ASSETS.length

    this.elements.numberText.innerHTML = `${Math.round(this.percent * 100)}`

    if(this.percent === 1)
      this.onLoaded()
  }

  drawLogo(path)
  {
    const colors = [COLOR_CADET_BLUE_CRAYOLA, COLOR_BLACK_CORAL, COLOR_CULTURED]

    this.svg_path = path
    const delay = Math.random()
    const length = this.svg_path.getTotalLength()

    colors.forEach((color, index) =>
    {
      this.tl.set(this.svg_path,
      {
        strokeDasharray: length + 0.5,
        strokeDashoffset: length + 0.6,
        fill: '#000000',
        autoRound: false
      }, 0)

      if(this.svg_path.classList.contains('corner'))
      {
        this.tl.to(this.svg_path,
        {
          strokeDashoffset: 0,
          autoRound: false,
          fill: 'none',
          strokeWidth: 2,
          duration: 2.,
          ease: `power3.out`,
          delay: 2
        }, index * 0.25 + delay)
      }
      else
      {
        this.tl.to(this.svg_path,
        {
          strokeDashoffset: 0,
          autoRound: false,
          fill: '#EEF1EF',
          duration: 3.,
          ease: `power3.out`,
          delay: 3
        }, index * 0.52 + delay)
      }

      this.svg_path.setAttribute('stroke', color)
    })
  }

  onLoaded()
  {
    return new Promise(resolve =>
    {
      this.animateOut = gsap.timeline({
        delay: 2
      })

      this.animateOut.to(this.element,
      {
        duration: 1.,
        ease: 'expo.out',
        opacity: 0.0,
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
