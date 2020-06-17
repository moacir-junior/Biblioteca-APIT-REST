const Express = require('express');
const AuthorsController = require('../controllers/authorsController');
const router = Express.Router();

router.get('/', new AuthorsController().read);

router.get('/:authorId', (req, resp, next) => {
    resp.status(200).send({
        mensagem: 'Retorna um autor específico. Não implementado ainda.',
        id: req.params.authorId,
    });
});

router.get('/livros/:bookId', new AuthorsController().readByBook);

router.post('/', new AuthorsController().create);

router.patch('/:authorId', (req,resp, next) => {
    resp.status(201).send({
        mensagem: 'Altera um autor específico. Não implementado ainda.',
        id: req.params.authorId,
    });
});

router.delete('/:authorId',(req, resp, next) => {
    resp.status(201).send({
        mensagem: 'Exclui um autor específico. Não implementado ainda.',
        id: req.params.authorId,
    });
})

module.exports = router;