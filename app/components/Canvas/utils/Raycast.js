import { Vec2, Raycast } from 'ogl'

export default class Ray
{
  constructor({ gl, camera, screen, objects })
  {
    this.gl = gl
    this.camera = camera
    this.screen = screen
    this.obj = objects

    this.init()
  }

  init()
  {
    this.raycast = new Raycast()
    this.mouse = new Vec2()

    this.r_o = []
    this.hit_img = []

    this.obj.forEach(o =>
    {
      this.r_o.push(o.plane)
    })

    this.addEventListeners()
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

    if(this.hit_img)
      console.log(this.hit_img.index)
  }

  casting(e)
  {
    this.mouse.x = (e.x / this.screen.width) * 2.0 - 1.0
    this.mouse.y = -(e.y / this.screen.height * 2.0 - 1.0)

    this.raycast.castMouse(this.camera, this.mouse)

    this.obj.forEach( o => o.isHit = false )

    this.hits = this.raycast.intersectBounds(this.r_o)

    this.hits.forEach(obj =>
    {
      obj.isHit = true
    })

    if(this.hits.length)
    {
      this.hit_img = this.hits[0]
    }
    else
    {
      this.hit_img = null
    }
  }
}
