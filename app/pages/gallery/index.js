import Page from 'classes/Page'

export default class Gallery extends Page
{
  constructor()
  {
    super({
      id: 'gallery',
      element: '.gallery',
      elements: {
        title: '.gallery__title__text'
      }
    })

  }

}
