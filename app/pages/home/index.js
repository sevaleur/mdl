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

    this.selector_videos = document.querySelector('.selectors__videos')
    this.selector_photos = document.querySelector('.selectors__photos')

    this.selector_videos.addEventListener('onchange', () =>
    {
      this.hover = null

      this.hover = new Hover(this.video_titles)

      this.onHover(this.video_link_elements)
    })

    this.selector_photos.addEventListener('onchange', () =>
    {
      this.hover = null

      this.hover = new Hover(this.image_titles)

      this.onHover(this.image_link_elements)
    })
  }

  onHover(links)
  {
    links.forEach((link, index) =>
    {
      link.addEventListener('mouseover', () =>
      {
        this.hover.init(index)
      })

      link.addEventListener('mouseleave', () =>
      {
        this.hover.reset()
      })
    })
  }

}
