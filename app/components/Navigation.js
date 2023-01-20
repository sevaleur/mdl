import gsap from 'gsap'

import Component from "classes/Component"

import { COLOR_BIG_STONE, COLOR_MERCURY } from "utils/colors";

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
    if(template === 'project')
    {
      this.active_hl = document.querySelector('.project').getAttribute('data-id')

      this.active = document.querySelector('.navigation__location__active')
      this.active.innerHTML = this.active_hl
    }
    else
    {
      this.active = document.querySelector('.navigation__location__active').innerHTML = ''
    }

    gsap.to(this.element,
    {
      color: template === 'about' ? COLOR_BIG_STONE : COLOR_MERCURY,
      duration: 1.5
    })
  }
}
