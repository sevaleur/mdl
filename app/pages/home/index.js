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

    this.init(image_titles_left, image_titles_right, video_titles_left, video_titles_right, video_link_elements, image_link_elements)
  }

  init(i_left, i_right, v_left, v_right, v_links, i_links)
  {
    this.hover_image_left = new Hover(i_left)
    this.hover_image_right = new Hover(i_right)
    this.hover_video_left = new Hover(v_left)
    this.hover_video_right = new Hover(v_right)

    this.onHover(v_links, i_links)
  }

  onHover(v_links, i_links)
  {
    v_links.forEach((link, index) =>
    {
      link.addEventListener('mouseover', () =>
      {
        this.hover_video_left.init(index)
        this.hover_video_right.init(index)
      })

      link.addEventListener('mouseleave', () =>
      {
        this.hover_video_left.reset()
        this.hover_video_right.reset()
      })
    })

    i_links.forEach((link, index) =>
    {
      link.addEventListener('mouseover', () =>
      {
        this.hover_image_left.init(index)
        this.hover_image_right.init(index)
      })

      link.addEventListener('mouseleave', () =>
      {
        this.hover_image_left.reset()
        this.hover_image_right.reset()
      })
    })
  }

}
