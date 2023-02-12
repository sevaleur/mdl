import { Vec2, Raycast } from 'ogl'

export default class Raycasting
{
  constructor({ gl, camera, screen, objects })
  {
    this.gl = gl
    this.camera = camera
    this.screen = screen
    this.obj = objects

    this.hit_img = []

    this.init()
    this.initArr()
  }

  init()
  {
    this.raycast = new Raycast()
    this.mouse = new Vec2()

    this.addEventListeners()
  }

  initArr()
  {
    this.r_o = []

    this.obj.forEach(o =>
    {
      this.r_o.push(o.plane)
    })
  }

  addEventListeners()
  {
    window.addEventListener('load', () =>
    {
      window.addEventListener('mousemove', (e) =>
      {
        this.handleMouse(e)
      })

      window.addEventListener('touchmove', (e) =>
      {
        this.handleMouse(e)
      })

      window.addEventListener('click', (e) =>
      {
        this.handleClick(e)
      })
    })
  }

  handleMouse(e)
  {
    this.casting(e)
  }

  handleClick(e)
  {
    this.casting(e)
    if(this.hit_img != null)
    {
      this.hit_img && this.obj[this.hit_img.id].handleClick()
    }
  }

  casting(e)
  {
    this.mouse.x = (e.x / this.screen.width) * 2.0 - 1.0
    this.mouse.y = -(e.y / this.screen.height * 2.0 - 1.0)

    this.raycast.castMouse(this.camera, this.mouse)

    this.obj.forEach( o => o.isHit = false )

    const hits = this.raycast.intersectBounds(this.r_o)

    hits.forEach(obj =>
    {
      obj.isHit = true
    })

    if(hits.length)
    {
      this.hit_img = hits[0]
    }
    else
    {
      this.hit_img = null
    }
  }
}
