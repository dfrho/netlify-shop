const addToCart = require('./add-to-cart');
const getCart = require('./get-cart');
const removeFromCart = require('./remove-from-cart');
const addItemToCart = require('./utils/addItemToCart');
const getProduct = require('./utils/getProduct');
const createCartWithItem = require('./utils/createCartWithItem');
const getProductList = require('./utils/getProductList');
const postToShopify = require('./utils/postToShopify');
const removeItemFromCart = require('./utils/removeItemFromCart');

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  addItemToCart,
  getProduct,
  createCartWithItem,
  getProductList,
  postToShopify,
  removeItemFromCart,
};
