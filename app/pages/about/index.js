import gsap from 'gsap'

import Page from 'classes/Page'

import { COLOR_CULTURED, COLOR_DARK_JUNGLE_GREEN } from '../../utils/color_variables'

export default class About extends Page
{
  constructor()
  {
    super({
      id: 'about',
      element: '.about',
      elements: {
        wrapper: '.about__wrapper',
        navigation: document.querySelector('.navigation'),
        title: '.about__title'
      }
    })
  }
}
