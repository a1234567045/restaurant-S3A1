const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')



router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const userId = req.user._id
  const { name, name_en, category, location, phone, description, image, google_map } = req.body
  const rating = Number(req.body.rating)
  return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


router.get('/:id', (req, res) => {
  const userId = req.user._id
  const id = req.params.id
  return Restaurant.findOne(id, userId) //findById
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})


router.put('/:id', (req, res) => {
  const userId = req.user._id
  const id = req.params.id
  const reqbody = req.body
  return Restaurant.findOne({ id, userId })
    .then(restaurant => {
      Object.assign(restaurant, reqbody)
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const id = req.params.id
  return Restaurant.findOne({ id, userId })
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})



module.exports = router