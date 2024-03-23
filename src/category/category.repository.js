const prisma = require('../db')

const findCategories = async () => {
    const categoriesWithItemCount = await prisma.$queryRaw`
        SELECT c.name, c.id, CONVERT(COUNT(p.id), CHAR) as itemCount 
        FROM categories as c 
        JOIN products as p ON c.id = p.category_id 
        GROUP BY c.id
    `;

    return categoriesWithItemCount;
}

module.exports = {
    findCategories
}