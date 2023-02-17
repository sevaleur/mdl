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
    this.link_elements = document.querySelectorAll('.home__gallery__link')
    this.titles = document.querySelectorAll('[data-splitting]')

    this.hover = new Hover(this.titles)

    this.onHover()
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
