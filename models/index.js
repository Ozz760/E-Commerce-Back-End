// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: 'category', 
}); 

// Categories have many Products
Category.belongsToMany(Products, {
  foreignKey: 'category', 
  onDelete: 'CASCADE', 
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: 'product_tag', 
    unique: false, 
  }
}); 

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Products, {
  through: 'product_tag', 
  unique: false, 
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
