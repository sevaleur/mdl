import gsap from 'gsap'

import Component from "classes/Component"

import { COLOR_DARK_JUNGLE_GREEN, COLOR_CULTURED } from "utils/color_variables";

export default class Navigation extends Component
{
  constructor({ template })
  {
    super({
      element: '.navigation',
      elements:
      {
        items: '.navigation__list__item',
        links: '.navigation__list__item__link',
      }
    })

    this.onChange(template)
  }

  onChange(template)
  {
    gsap.to(this.element,
    {
      opacity: 1,
      color: template === 'about' ? COLOR_DARK_JUNGLE_GREEN : COLOR_CULTURED,
      duration: 1.5
    })
  }
}
