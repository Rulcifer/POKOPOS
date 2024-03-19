const prisma = require('../db');
const { findProducts } = require('./product.repository');

const getAllProducts = async () => {
    return products = await findProducts();
}

module.exports = {
    getAllProducts
}