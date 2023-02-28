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

    this.onMutation(this.selector_videos, this.selector_photos)
  }

  onMutation(videos, photos)
  {
    const videoObserver = new MutationObserver((e) =>
    {
      this.hover = null

      this.hover = new Hover(this.video_titles)
      this.onHover(this.video_link_elements)
      console.log(e)
    })

    videoObserver.observe(videos,
    {
      attributes: true,
      attributeFilter: ['class'],
      childList: true,
      characterData: true
    })

    const photoObserver = new MutationObserver((e) =>
    {
      this.hover = null

      this.hover = new Hover(this.image_titles)
      this.onHover(this.image_link_elements)
      console.log(e)
    })

    photoObserver.observe(photos,
    {
      attributes: true,
      attributeFilter: ['class'],
      childList: true,
      characterData: true
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
