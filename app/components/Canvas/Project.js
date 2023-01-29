import { Plane, Transform } from 'ogl'
import map from 'lodash/map'

import Media from './Media'

export default class Project
{
  constructor({ gl, scene, sizes })
  {
    this.gl = gl
    this.sizes = sizes
    this.group = new Transform()

    this.mediaElements = document.querySelectorAll('.project__gallery__media__image')

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
    this.medias = map(this.mediaElements, (element, index) =>
    {
      return new Media({
        element,
        geometry: this.geo,
        index,
        gl: this.gl,
        scene: this.group,
        sizes: this.sizes
      })
    })
  }

  onResize(event)
  {
    map(this.medias, media => media.onResize(event) )
  }
}
