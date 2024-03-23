const prisma = require('../db');
const { findCategories } = require('./category.repository');

const getAllCategoriesWithItemCount = async () => {
    return await findCategories();

    // const cek = categories
    const categoriesWithItemCount = categories.map(item => ({
        id: item.id,
        name: item.name,
        itemCount: item.itemCount
    }))
    return categoriesWithItemCount

}

module.exports = {
    getAllCategoriesWithItemCount
}