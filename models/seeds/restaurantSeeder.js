const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Restaurant = require('../restaurant')
const restaurantList = require('../../restaurant.json').results
const User = require('../user')
const db = require('../../config/mongoose')
const SEED_USERS = [
  {
    email: 'user1@example.com',
    password: '12345678',
    restaurants: restaurantList.slice(0, 3)
  }, {
    email: 'user2@example.com',
    password: '12345678',
    restaurants: restaurantList.slice(3, 6)
  }]

mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })


db.once('open', () => {
  console.log('mongodb connected!')
  return Promise.all(SEED_USERS.map(async (SEED_USER) => {
    const { email, password, restaurants } = SEED_USER
    await bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(SEED_USER.password, salt))
      .then(hash => User.create({ email, password: hash }))
      .then(user => {
        return Promise.all(restaurants.map(restaurant => {
          const { name, name_en, category, image, location, phone, google_map, rating, description } = restaurant
          const userId = user._id
          return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description, userId })
        }))
      })
  }))
    .then(() => {
      console.log('done.')
      process.exit()
    })


  console.log('done')
})