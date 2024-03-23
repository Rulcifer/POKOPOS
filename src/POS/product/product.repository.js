const prisma = require('../../db');

const findProducts = async () => {
    return await prisma.product.findMany();
}


module.exports = {
    findProducts,
}