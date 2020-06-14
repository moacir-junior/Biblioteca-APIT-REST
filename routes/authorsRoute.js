const Express = require('express');
const router = Express.Router();

router.get('/', (req, resp, next) => {
    resp.status(200).send({
        mensagem: 'Retorna os autores.',
    });
});

router.get('/:authorId', (req, resp, next) => {
    resp.status(200).send({
        mensagem: 'Retorna um autor específico.',
        id: req.params.authorId,
    });
});

router.post('/', (req, resp, next) => {
    const author = {
        name: req.body.name,
    };

    resp.status(200).send({
        mensagem: 'Adiciona um novo pedido.',
        author: author,
    });
});

module.exports = router;