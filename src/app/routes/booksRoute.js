const Express = require('express');
const router = Express.Router();

router.get('/', (req, resp, next) => {
    resp.status(200).send({
        mensagem: 'Retorna os livros.',
    });
});

router.get('/:bookId', (req, resp, next) => {
    resp.status(200).send({
        mensagem: 'Retorna um livro específico.',
        id: req.params.bookId,
    });
});

router.post('/', (req, resp, next) => {
    resp.status(201).send({
        mensagem: 'Adiciona um livro.',
        id: req.params.bookId,
    });
});

router.patch('/:bookId', (req, resp, next) => {
    resp.status(201).send({
        mensagem: 'Altera um livro específico.',
        id: req.params.bookId,
    });
});

router.delete('/:bookId', (req, resp, next) => {
    resp.status(201).send({
        mensagem: 'Exclui um livro específico.',
        id: req.params.bookId,
    });
});


module.exports = router;