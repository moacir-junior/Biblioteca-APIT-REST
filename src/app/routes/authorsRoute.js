const Express = require('express');
const AuthorsController = require('../controllers/authorsController');
const router = Express.Router();

router.get('/', new AuthorsController().read);

router.get('/:authorId', (req, resp, next) => {
    resp.status(200).send({
        mensagem: 'Retorna um autor específico.',
        id: req.params.authorId,
    });
});

router.post('/', new AuthorsController().create);

module.exports = router;