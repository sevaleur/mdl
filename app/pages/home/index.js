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

    const image_titles_left = document.querySelectorAll('.home__gallery__image__titles__left')
    const image_titles_right = document.querySelectorAll('.home__gallery__image__titles__right')

    const video_titles_left = document.querySelectorAll('.home__gallery__video__titles__left')
    const video_titles_right = document.querySelectorAll('.home__gallery__video__titles__right')

    let selector_v = document.querySelector('.selectors__videos')
    let selector_p = document.querySelector('.selectors__photos')

    if(!selector_v)
    {
      selector_v = document.querySelector('.selectors__videos--active')
      this.hover_left = new Hover(video_titles_left)
      this.hover_right = new Hover(video_titles_right)
      this.onHover(video_link_elements)
    }

    if(!selector_p)
    {
      selector_p = document.querySelector('.selectors__photos--active')
      this.hover_left = new Hover(image_titles_left)
      this.hover_right = new Hover(image_titles_right)
      this.onHover(image_link_elements)
    }

    this.onMutation(selector_v, video_titles_left, video_titles_right, video_link_elements)
    this.onMutation(selector_p, image_titles_left, image_titles_right, image_link_elements)
  }

  onMutation(selector, titles_left, titles_right, links)
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
            this.hover_left = new Hover(titles_left)
            this.hover_right = new Hover(titles_right)
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
      characterData: false
    })
  }

  onHover(links)
  {
    links.forEach((link, index) =>
    {
      link.addEventListener('mouseover', () =>
      {
        this.hover_left.init(index)
        this.hover_right.init(index)
      })

      link.addEventListener('mouseleave', () =>
      {
        this.hover_left.reset()
        this.hover_right.reset()
      })
    })
  }

}
