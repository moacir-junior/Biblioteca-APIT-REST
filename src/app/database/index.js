const Sequelize = require('sequelize');
const Author = require('../models/authors');
const databaseConfig = require('../../config/database');
const { init } = require('../models/authors');

const models = [Author];

class Database{
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig);
        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}

module.exports = new Database();