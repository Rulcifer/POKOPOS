const prisma = require('../../db');
const { findCategories, productByCategoryId } = require('./category.repository');

const getAllCategoriesWithItemCount = async () => {
    const categories = await findCategories();

    // const cek = categories
    const categoriesWithItemCount = categories.map(item => ({
        id: item.id,
        name: item.name,
        itemCount: item.itemCount
    }))

    return categoriesWithItemCount

}

const getProductByCategoryId = async (id) => {
    const data = await productByCategoryId(id)
    return data
}

module.exports = {
    getAllCategoriesWithItemCount,
    getProductByCategoryId
}