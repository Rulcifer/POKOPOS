const prisma = require('../db');
const { findCategories } = require('./category.repository');

const getAllCategoriesWithItemCount = async () => {
    const categories = await findCategories();

    return categories[0].product
    const categoriesWithItemCount = categories.map(item => ({
        id: item.id,
        name: item.name,
        itemCount: item.products.length,
    }))

}

module.exports = {
    getAllCategoriesWithItemCount
}