const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');
const booksRoute = require('./routes/booksRoute');
const authorsRoute = require('./routes/authorsRoute');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/livros', booksRoute);
app.use('/autores', authorsRoute);



app.use((req, use, next) => {
    const erro = new Error('Não encontrado.');
    erro.status = 404;
    next(erro);
});

app.use((error, req, resp, next) => {
    resp.status(error.status || 500);
    return resp.send({
        erro: {
            mensagem: error.message,
        },
    });
});

module.exports = app;