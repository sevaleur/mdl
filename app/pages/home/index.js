import gsap from 'gsap'

import Page from 'classes/Page'
import Hover from 'animations/Hover'

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
  }

  initAnimation()
  {
    this.video_link_elements = document.querySelectorAll('.home__gallery__video__link')
    this.image_link_elements = document.querySelectorAll('.home__gallery__image__link')

    this.image_titles = document.querySelectorAll('.home__content__images__title__text')
    this.video_titles = document.querySelectorAll('.home__content__videos__title__text')

    this.hover = new Hover(this.image_titles)

    this.onHover()
  }

  onHover()
  {
    /* this.video_link_elements.forEach((element, index) =>
    {
      element.addEventListener('mouseover', () =>
      {
        this.hover.init(index)
      })

      element.addEventListener('mouseleave', () =>
      {
        this.hover.reset()
      })
    }) */

    this.image_link_elements.forEach((element, index) =>
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
