const Express = require('express');
const BooksController = require('../controllers/booksController');
const router = Express.Router();

router.get('/', new BooksController().read);

router.get('/:bookId', (req, resp, next) => {
    resp.status(200).send({
        mensagem: 'Retorna um livro específico. Não implementado ainda.',
        id: req.params.bookId,
    });
});

router.post('/', new BooksController().create);

router.patch('/:bookId', (req, resp, next) => {
    resp.status(201).send({
        mensagem: 'Altera um livro específico. Não implementado ainda.',
        id: req.params.bookId,
    });
});

router.delete('/:bookId', (req, resp, next) => {
    resp.status(201).send({
        mensagem: 'Exclui um livro específico. Não implementado ainda.',
        id: req.params.bookId,
    });
});


module.exports = router;