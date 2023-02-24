import Page from 'classes/Page'

export default class Video extends Page
{
  constructor()
  {
    super({
      id: 'video',
      element: '.video',
      elements: {
        title: '.short__title__text',
        desc: '.short__desc__text',
        video: 'video'
      }
    })

  }

}
