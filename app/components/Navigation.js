import Component from "classes/Component"

import gsap from 'gsap'

export default class Navigation extends Component
{
  constructor({ template })
  {
    super({
      element: '.navigation',
      elements:
      {
        svg: '.navigation__home__logo',
        items: '.navigation__list__item',
        links: '.navigation__list__item__link',
      }
    })
  }
}
