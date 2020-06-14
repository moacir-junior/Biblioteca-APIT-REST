const Author = require('../models/authors');

class AuthorsController{
    async create(req, resp){
        const author = await Author.create(req.body);
        
        return resp.status(201).send(author);
    }

    async read(req, resp){
        const authors = await Author.findAll();

        return resp.status(200).send(authors);
    }
}

module.exports = AuthorsController;