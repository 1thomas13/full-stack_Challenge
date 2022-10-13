const app = require('express')
const { register, login } = require('../controllers/user')
const router = app.Router()

router.post('/register', register)
router.get('/login', login)

module.exports =  router