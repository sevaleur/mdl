import Page from 'classes/Page'
import Select from 'animations/Select'

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

    this.init()
    this.onHover()
  }

  create()
  {
    super.create()

  }

  init()
  {
    this.link_elements = document.querySelectorAll('.home__gallery__link')
    this.titles = document.querySelectorAll('[data-splitting]')

    this.select = new Select(this.titles)
    console.log(this.titles)
  }

  onHover()
  {
    this.link_elements.forEach((element, index) =>
    {
      element.addEventListener('mouseover', () =>
      {
        this.select.init(index)
      })

      element.addEventListener('mouseleave', () =>
      {
        this.select.reset()
      })
    })
  }

}
