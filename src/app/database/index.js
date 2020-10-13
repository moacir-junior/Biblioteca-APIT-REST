const Sequelize = require('sequelize')
const Book = require('../models/book')
const Author = require('../models/author')
const Storage = require('../models/storage')
const databaseConfig = require('../../config/database')

const models = [Author, Book, Storage]

class Database{
    constructor(){
        this.init()
    }

    init(){
        this.connection = new Sequelize(databaseConfig)
        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models))
    }
}

module.exports = new Database()