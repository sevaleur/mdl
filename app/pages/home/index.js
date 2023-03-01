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

    this.onMutation(this.selector_videos, this.video_titles, this.video_link_elements)
    this.onMutation(this.selector_photos, this.image_titles, this.image_link_elements)
  }

  onMutation(selector, titles, links)
  {
    const prev = selector.className

    const mutationObserver = new MutationObserver((mutations) =>
    {
      mutations.forEach(mutation =>
      {
        if(mutation.attributeName === 'class')
        {
          console.log(prev)
          const current = mutation.target.className
          console.log(current)
          if(prev !== current)
          {
            console.log('class changed')
            this.hover = new Hover(titles)
            this.onHover(links)
          }
          else
          {
            console.log('class removed')
            this.hover = null
          }
        }
      })
    })

    mutationObserver.observe(selector,
    {
      attributes: true,
      attributeFilter: ['class'],
      childList: false,
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
