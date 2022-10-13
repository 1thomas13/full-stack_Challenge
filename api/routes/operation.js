const app = require('express')
const { create, edit, remove, allOperations } = require('../controllers/operation')
const { isLogged } = require('../middlewares')
const router = app.Router()

router.get('/', isLogged, allOperations)
router.post('/', isLogged, create)
router.delete('/:id', isLogged, remove)
router.put('/:id', isLogged, edit)

module.exports =  router