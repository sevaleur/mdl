import { Texture } from 'ogl'
import gsap from 'gsap'

import Component from "classes/Component"

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

  onAssetLoaded(image)
  {
    this.length += 1

    this.percent = this.length / window.ASSETS.length

    this.elements.numberText.innerHTML = `${Math.round(this.percent * 100)}`

    if(this.percent === 1)
      this.onLoaded()
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
