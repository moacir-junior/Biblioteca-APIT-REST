const Book = require('../models/book');
const Author = require('../models/author');

class BooksController {
    async create(req, resp) {
        const { author_id } = req.body;
        const author = await Author.findByPk(author_id);

        if (!author) {
            return resp.status(500).send({ error: 'O autor informado ainda não foi cadastrado.' });
        }

        const book = await Book.create(req.body);
        return resp.status(201).send(book);
    }

    async read(req, resp) {
        const book = await Book.findByPk(req.params.bookId);
        return resp.status(200).send(book);
    }

    async readAll(req, resp) {
        const books = await Book.findAll({
            order: [['name', 'ASC'],],
        });
        return resp.status(200).send(books);
    }

    async update(req, resp) {
        const book = await Book.findByPk(req.params.bookId);
        if(req.body.name)
            book.name = req.body.name;
        
        if(req.body.author_id)
            book.author_id = req.body.author_id;
        
        if(req.body.year)
            book.year = req.body.year;

        if(req.body.eval)
            book.eval = req.body.eval;

        if(req.body.comment)
            book.comment = req.body.comment;

        await book.save();
        return resp.status(201).send(book);
    }

    async delete(req, resp) {
        await Book.destroy({ where: { id: req.params.bookId } });
        return resp.status(201).send();
    }
}

module.exports = new BooksController();