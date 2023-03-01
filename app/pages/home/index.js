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

    this.getElements()
  }

  getElements()
  {
    const video_link_elements = document.querySelectorAll('.home__gallery__video__link')
    const image_link_elements = document.querySelectorAll('.home__gallery__image__link')

    const image_titles = document.querySelectorAll('.home__content__images__title__text')
    const video_titles = document.querySelectorAll('.home__content__videos__title__text')

    const selector_v = document.querySelector('.selectors__videos')
    const selector_p = document.querySelector('.selectors__photos')

    this.onMutation(selector_v, video_titles, video_link_elements)
    this.onMutation(selector_p, image_titles, image_link_elements)
  }

  onMutation(selector, titles, links)
  {
    const mutationObserver = new MutationObserver((mutations) =>
    {
      mutations.forEach(mutation =>
      {
        if(mutation.attributeName === 'class')
        {
          const current = mutation.target.className
          if(current.match(/(--active)(?![_a-zA-Z0-9-])/g))
          {
            this.hover = new Hover(titles)
            this.onHover(links)
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
