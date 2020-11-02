const Book = require('../models/book')
const Author = require('../models/author')
const Storage = require('../models/storage')
const { Sequelize } = require('sequelize')

class BooksController {
  async create(req, resp) {
    const { author_id, storage_id } = req.body

    const author = await Author.findByPk(author_id)
    if (!author)
      return resp.status(500).send({ error: 'O autor informado ainda não foi cadastrado.' })

    const storage = await Storage.findByPk(storage_id)
    if(!storage)
      return resp.status(500).send({ error: 'A prateleira informada ainda não foi cadastrada.' })

    const book = await Book.create(req.body)
    return resp.status(201).send(book)
  }

  async read(req, resp) {
    const book = await Book.findByPk(req.params.bookId, {
      include: [
        { association: 'author' },
        { association: 'storage' },
      ],
    })
    return resp.status(200).send(book)
  }

  async readAll(req, resp) {
    const limit = req.query.pagesize ? parseInt(req.query.pagesize) : 1000
    const offset = req.query.page ? parseInt(req.query.page) : 0
    const Op = Sequelize.Op;
    let where = {}
    
    if('name' in req.query){
      where.name = {
        [Op.like]: `${req.query.name}%`
      } 
    }
      
    if('author' in req.query)
      where.author_id = req.query.author

    if('storage' in req.query)
      where.storage_id = req.query.storage
    
    console.log('WHERE', where)

    const books = await Book.findAll({
      where,
      order: [['name', 'ASC'],],
      limit,
      offset,
      include: [
        { association: 'author' },
        { association: 'storage' },
      ],
    })

    return resp.status(200).send(books)
  }

  async update(req, resp) {
    const book = await Book.findByPk(req.params.bookId)
    if (req.body.name)
      book.name = req.body.name

    if (req.body.author_id)
      book.author_id = req.body.author_id

    if (req.body.storage_id)
      book.storage_id = req.body.storage_id

    if (req.body.year)
      book.year = req.body.year

    if (req.body.eval)
      book.eval = req.body.eval

    if (req.body.comment)
      book.comment = req.body.comment

    await book.save()
    return resp.status(201).send(book)
  }

  async delete(req, resp) {
    await Book.destroy({ where: { id: req.params.bookId } })
    return resp.status(201).send()
  }
}

module.exports = new BooksController()