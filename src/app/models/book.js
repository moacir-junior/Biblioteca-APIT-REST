const Sequelize = require('sequelize')

class Book extends Sequelize.Model{
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      year: Sequelize.INTEGER,
      eval: Sequelize.INTEGER,
      comment: Sequelize.TEXT,
    }, {sequelize})
  
    return this
  }

  static associate(models){
    this.belongsTo(models.Author, {foreignKey: 'author_id', as: 'author'})
    this.belongsTo(models.Storage, {foreignKey: 'storage_id', as: 'storage'})
  }
}

module.exports = Book