import { Plane, Transform } from 'ogl'
import map from 'lodash/map'

import Media from './Media'

export default class Project
{
  constructor({ gl, scene })
  {
    this.gl = gl
    this.group = new Transform()

    this.medias = document.querySelectorAll('.project__gallery__media__image')

    this.createGeometry()
    this.createGallery()

    this.group.setParent(scene)
  }

  createGeometry()
  {
    this.geo = new Plane(this.gl)
  }

  createGallery()
  {
    map(this.medias, (element, index) =>
    {
      return new Media({
        element,
        geometry: this.geo,
        index,
        gl: this.gl,
        scene: this.group
      })
    })
  }
}
