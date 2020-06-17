const Sequelize = require('sequelize');

class Author extends Sequelize.Model{
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
    }, {sequelize});
  
    return this;
  }

  static associate(models){
    this.hasMany(models.Book, {foreignKey: 'author_id', as: 'books'});
  }
}

module.exports = Author;