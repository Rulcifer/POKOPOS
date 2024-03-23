const prisma = require('../../db');

const getAllProducts = async () => {
    return products = await findProducts();
}



module.exports = {
    getAllProducts,
}