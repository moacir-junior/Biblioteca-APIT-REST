const Express = require('express');
const authorsController = require('../controllers/authorsController');
const router = Express.Router();

router.get('/', authorsController.readAll);

router.get('/:authorId', authorsController.read);

router.get('/livros/:bookId', authorsController.readByBook);

router.post('/', authorsController.create);

router.patch('/:authorId', authorsController.update);

module.exports = router;