require('dotenv').config()

const fetch = require('node-fetch')
const prismic = require('@prismicio/client')
const prismicH = require('@prismicio/helpers')

const express = require('express')
const app = express()

const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

const initApi = req =>
{
    return prismic.createClient(process.env.PRISMIC_ENDPOINT, {
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        req,
        fetch
    })
}

const linkResolver = doc =>
{
    if(doc.type === 'gallery')
    {
      return `/gallery/${doc.slug}`
    }

    if(doc.type === 'video')
    {
      return `/video/${doc.slug}`
    }

    if(doc.type === 'about')
    {
      return '/about'
    }

    return '/'
}

app.use((req, res, next) => {
    res.locals.Link = linkResolver
    res.locals.prismicH = prismicH

    next()
  })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const handleReq = async api =>
{
  const meta = await api.getSingle('meta')
  const preloader = await api.getSingle('preloader')
  const navigation = await api.getSingle('navigation')

  const home = await api.getSingle('home', {
    fetchLinks: [
      'gallery.gallery_link_image',
      'gallery.gallery_title',
      'video.preview_frame',
      'video.video_title'
    ]
  })

  const about = await api.getSingle('about')

  const all_galleries = await api.getAllByType('gallery')
  const all_videos = await api.getAllByType('video')

  const assets = []

  assets.push(about.data.title_image.url)
  assets.push(about.data.footer_image.url)

  all_galleries.forEach(gallery =>
  {
    gallery.data.gallery_images.forEach(asset =>
    {
      assets.push(asset.image.url)
    })
  })

  all_videos.forEach(video =>
  {
    assets.push(video.data.preview_frame.url)
  })

  return {
    assets,
    home: home.data,
    about: about.data,
    meta,
    preloader,
    navigation
  }
}

app.get('/', async(req, res) =>
{
    const api = initApi(req)
    const defaults = await handleReq(api)

    res.render('pages/home', {
      ...defaults
    })
})

app.get('/about', async(req, res) =>
{
    const api = initApi(req)
    const defaults = await handleReq(api)

    res.render('pages/about', {
      ...defaults
    })
})

app.get('/gallery/:uid', async(req, res) =>
{
    try
    {
      const api = initApi(req)
      const defaults = await handleReq(api)
      const gallery = await api.getByUID('gallery', req.params.uid)

      res.render('pages/gallery', {
        ...defaults,
        gallery: gallery.data
      })
    }
    catch (error)
    {
      console.log(error)
    }
})

app.get('/video/:uid', async(req, res) =>
{
    try
    {
      const api = initApi(req)
      const defaults = await handleReq(api)
      const video = await api.getByUID('video', req.params.uid)

      res.render('pages/video', {
        ...defaults,
        video: video.data
      })
    }
    catch (error)
    {
      console.log(error)
    }
})

app.listen(port, () =>
{
  console.log(`Listening at http://localhost:${port}`)
})
