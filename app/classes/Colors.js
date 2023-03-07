import gsap from 'gsap'

class Colors
{
  change({
    backgroundColor,
    color,
  })
  {
    gsap.to(document.documentElement,
    {
      backgroundColor,
      color,
      duration: 1.5,
    })

    gsap.to(document.querySelectorAll('.p'),
    {
      stroke: color,
      fill: color,
      duration: 1.5,
    })
  }
}

export const ColorManager = new Colors()
