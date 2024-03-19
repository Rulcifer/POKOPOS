const prisma = require('../db')

const findCategories = async () => {
    return await prisma.category.findMany({
        include: {
            product: true
        }
    })
}

module.exports = {
    findCategories
}