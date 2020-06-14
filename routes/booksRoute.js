const Express = require('express');
const router = Express.Router();
const mysql = require('../mysql').pool;

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
    mysql.getConnection((error, con) => {
        con.query(
            'INSERT INTO books (name, authorId, year, eval, comment) values (?,?,?,?,?)',
            [req.body.name, req.body.authorId, req.body.year, req.body.eval, req.body.comment],
            (error, result, field) => {
                con.release();
                if(error){
                    return resp.status(500).send({
                        error: error,
                        response: null,
                    });
                }
                
                resp.status(201).send({
                    mensagem: 'Produto inserido com sucesso',
                    livroId: result.insertId,
                });
            }
        );
    })
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