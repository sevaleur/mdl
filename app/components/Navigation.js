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

    //this.onHover()
  }

  onHover()
  {
    this.underline = this.elements.svg.querySelector('.underline')

    this.elements.svg.addEventListener('mouseover', () =>
    {
      gsap.fromTo(
        this.underline,
        {
          stroke: '#18181A',
          fill: 'none',
          strokeDashoffset: 0.6,
          strokeWidth: 0,
          autoRound: false,
        },
        {
          stroke: '#EEF1EF',
          strokeDashoffset: 0,
          strokeWidth: 0.5,
          duration: 1,
          ease: `power3.out`,
          autoRound: false
        }
      )
    })

    this.elements.svg.addEventListener('mouseleave', () =>
    {
      gsap.fromTo(
        this.underline,
        {
          stroke: '#EEF1EF',
          fill: 'none',
          strokeDashoffset: 0,
          autoRound: false,
          strokeWidth: 0.5
        },
        {
          stroke: '#18181A',
          strokeDashoffset: 0.6,
          strokeWidth: 0,
          duration: 1,
          ease: `power3.out`,
          autoRound: false
        }
      )
    })
  }
}
