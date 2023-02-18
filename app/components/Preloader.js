import each from 'lodash/each'
import gsap from 'gsap'
import Splitting from 'splitting'

import Component from "classes/Component"

export default class Preloader extends Component
{
  constructor()
  {
    super({
      element: '.preloader',
      elements: {
        title: '.preloader__text',
        numberText: '.preloader__number__text',
        images: document.querySelectorAll('img')
      }
    })

    Splitting({
      target: this.elements.title,
      by: 'chars'
    })

    Splitting({
      target: this.elements.numberText,
      by: 'chars'
    })

    this.length = 0
    this.finished = false

    this.tl = gsap.timeline({
      onComplete: () => {
        this.finished = true

        if(this.percent === 1 && this.finished)
          this.onLoaded()
      }
    });

    this.createLoader()
    document.querySelectorAll('path').forEach(p => this.loading(p))
  }

  createLoader()
  {
    each(this.elements.images, element =>
    {
      element.onload = _ => this.onAssetLoaded(element)
      element.src = element.getAttribute('data-src')
    })

    this.number_chars = this.elements.numberText.querySelectorAll('.char')
  }

  onAssetLoaded(image)
  {
    this.length += 1

    this.percent = this.length / this.elements.images.length

    this.elements.numberText.innerHTML = `${Math.round(this.percent * 100)}%`

    if(this.percent === 1 && this.finished)
      this.onLoaded()
  }

  loading(node, index)
  {
    const colors = ['#e97777', '#ffc777', '#fffad7'];

    this.svg_path = node;
    const delay = Math.random();
    const length = this.svg_path.getTotalLength();

    colors.forEach((color, index) => {
      if (index !== 0)
      {
        this.svg_path = this.svg_path.cloneNode();

        node.parentNode.appendChild(this.svg_path);
      }

      this.tl.set(this.svg_path,
      {
        strokeDasharray: length + 0.5,
        strokeDashoffset: length + 0.6,
        autoRound: false
      }, 0);

      this.tl.to(this.svg_path, {
        strokeDashoffset: 0,
        autoRound: false,
        duration: 1.2,
        ease: `power3.out`
      }, index * 0.25 + delay);

      this.svg_path.setAttribute('stroke', color);
    })
  }

  onLoaded()
  {
    return new Promise(resolve =>
      {
        this.animateOut = gsap.timeline({
          delay: 2
        })

        this.animateOut.set(this.number_chars,
        {
          'willChange': 'opacity, transform',
          y: '0%',
          opacity: 1
        })

        this.animateOut.to(this.number_chars, {
          duration: 1.5,
          ease: 'expo.out',
          stagger: 0.1,
          opacity: 0,
          y: '100%',
        }, '-=1.4')

        this.animateOut.to(this.svg_path,
        {
          opacity: 0,
          duration: 1.5
        })

        this.animateOut.to(this.element,
        {
          duration: 1.5,
          ease: 'expo.out',
          scaleY: 0,
          transformOrigin: '100% 100%'
        }, '-=1')

        this.animateOut.call(_ =>
        {
          this.emit('completed')
        })
      })
  }

  destroy()
  {
    this.element.parentNode.removeChild(this.element)
  }
}
