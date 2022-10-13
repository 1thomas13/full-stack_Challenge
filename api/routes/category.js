const app = require('express')
const { Category } = require('../database/models')
const router = app.Router()

router.get('/', async(_req,res) => {
  const categories = await Category.findAll()
  res.json(categories)
})


module.exports =  router