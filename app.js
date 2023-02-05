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

  return {
    meta,
    preloader,
    navigation
  }
}

app.get('/', async(req, res) =>
{
    const api = initApi(req)
    const defaults = await handleReq(api)
    const home = await api.getSingle('home', {
      fetchLinks: [
        'gallery.gallery_link_image',
        'gallery.gallery_title'
      ]
    })

    res.render('pages/home', {
      ...defaults,
      home: home.data
    })
})

app.get('/about', async(req, res) =>
{
    const api = initApi(req)
    const defaults = await handleReq(api)
    const about = await api.getSingle('about')

    res.render('pages/about', {
      ...defaults,
      about: about.data
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

app.listen(port, () =>
{
  console.log(`Listening at http://localhost:${port}`)
})
