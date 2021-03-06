// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Todo model
const Restaurant = require('../../models/restaurant')


// 定義首頁路由
router.get('/', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId})
    .lean()
    .sort({ _id: 'asc' }) // desc
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})

router.get('/search', (req, res) => {
  const keyword = req.query.keyword
  Restaurant.find()
    .lean()
    .sort({ _id: 'asc' }) // desc
    .then(restaurantList =>
      restaurantList.filter(restaurant => {
        const name = restaurant.name.toLowerCase().includes(keyword.toLowerCase())
        const category = restaurant.category.includes(keyword)
        return (name || category)
      })
    )
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})



// 匯出路由模組
module.exports = router