const Express = require('express')
const storageController = require('../controllers/storagesController')
const router = Express.Router()

router.get('/', storageController.readAll)

router.get('/:storageId', storageController.read)

router.get('/books/:bookId', storageController.readByBook)

router.post('/', storageController.create)

router.patch('/:storageId', storageController.update)

module.exports = router