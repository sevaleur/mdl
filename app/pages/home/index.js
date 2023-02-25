import gsap from 'gsap'

import Page from 'classes/Page'
import Hover from 'animations/Hover'

import { COLOR_CULTURED, COLOR_CADET_BLUE_CRAYOLA, COLOR_BLACK_CORAL } from '../../utils/color_variables'

export default class Home extends Page
{
  constructor()
  {
    super({
      id: 'home',
      element: '.home',
      elements: {
        logo: 'svg'
      }
    })
  }

  create()
  {
    super.create()

    this.initAnimation()
    this.createLogo()
  }

  createLogo()
  {
    this.tl = gsap.timeline()

    const paths = document.querySelectorAll('path')
    paths.forEach(path => this.drawLogo(path))
  }

  initAnimation()
  {
    this.link_elements = document.querySelectorAll('.home__gallery__image__link')
    this.titles = document.querySelectorAll('[data-splitting]')

    this.hover = new Hover(this.titles)

    this.onHover()
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
          strokeWidth: 6,
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

  onHover()
  {
    this.link_elements.forEach((element, index) =>
    {
      element.addEventListener('mouseover', () =>
      {
        this.hover.init(index)
      })

      element.addEventListener('mouseleave', () =>
      {
        this.hover.reset()
      })
    })
  }

}
