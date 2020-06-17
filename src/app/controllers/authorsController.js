const Author = require('../models/author');

class AuthorsController{
    async create(req, resp){
        const author = await Author.create(req.body);        
        return resp.status(201).send(author);
    }

    async read(req, resp){
        const authors = await Author.findAll();
        return resp.status(200).send(authors);
    }

    async readByBook(req, resp){
        const {bookId} = req.params;

        const author = await Author.findByPk(bookId, {
            include: {association: 'books'}
        });

        return resp.status(200).send(author);
    }
}

module.exports = AuthorsController;