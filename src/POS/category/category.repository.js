const prisma = require('../../db')

const findCategories = async () => {
    const categoriesWithItemCount = await prisma.$queryRaw`
        SELECT c.name, c.id, CONVERT(COUNT(p.id), CHAR) as itemCount 
        FROM categories as c 
        JOIN products as p ON c.id = p.category_id 
        GROUP BY c.id
    `;

    return categoriesWithItemCount;
}

const productByCategoryId = async (id) => {
    // const data = await prisma.product.findMany({
    //     where: {
    //         categoryId: id
    //     }
    // })
    // return id
    const data = await prisma.product.findMany({
        where: {
            category_id: id
        }
    })
    return data
}

module.exports = {
    findCategories,
    productByCategoryId
}