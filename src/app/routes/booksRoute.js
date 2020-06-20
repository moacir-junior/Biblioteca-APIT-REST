const Express = require('express');
const booksController = require('../controllers/booksController');
const router = Express.Router();

router.get('/', booksController.readAll);

router.get('/:bookId', booksController.read);

router.post('/', booksController.create);

router.patch('/:bookId', booksController.update);

router.delete('/:bookId', booksController.delete);


module.exports = router;