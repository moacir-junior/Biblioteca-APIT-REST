const Sequelize = require('sequelize')

class Storage extends Sequelize.Model{
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
    }, {sequelize})
  
    return this
  }

  static associate(models){
    this.hasMany(models.Book, {foreignKey: 'storage_id', as: 'books'})
  }
}

module.exports = Storage