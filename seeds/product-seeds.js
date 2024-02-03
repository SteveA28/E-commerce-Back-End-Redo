const { Product } = require('../models');

const productData = [
  {
    product_name: 'Laptop',
    price: 799.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'T-Shirt',
    price: 14.99,
    stock: 35,
    category_id: 2,
  },
  {
    product_name: 'Headphones',
    price: 89.99,
    stock: 25,
    category_id: 3,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
