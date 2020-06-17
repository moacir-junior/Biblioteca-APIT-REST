const Book = require('../models/book');
const Author = require('../models/author');

class BooksController{
    async create(req, resp){
        const {author_id} = req.body;
        const author = await Author.findByPk(author_id);

        if(!author){
            return resp.status(400).send({error: 'O autor informado ainda não foi cadastrado.'});
        }

        const book = await Book.create(req.body);

        return resp.status(201).send(book);
    }

    async read(req, resp){
        const authors = await Book.findAll();
        return resp.status(200).send(authors);
    }
}

module.exports = BooksController;