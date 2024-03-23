const express = require("express");
const { getAllCategoriesWithItemCount, getProductByCategoryId } = require("./category.service");
const { notFoundResponse, successResponse, errorResponse } = require("../../../helpers/jsonResponse");

const route = express.Router();

route.get('/', async (req, res) => {
    const dataCategories = await getAllCategoriesWithItemCount()
    try {
        if (!dataCategories[0]) {
            return notFoundResponse(res)
        }

        return successResponse(res, dataCategories)
    } catch (error) {
        console.log(error)
        return errorResponse(res, error)
    }
})

route.get('/:id', async (req, res) => {
    try {
        const categoryId = req.params.id
        const data = await getProductByCategoryId(categoryId)

        if (!data[0]) {
            return notFoundResponse(res)
        }

        return successResponse(res, data,)
    } catch (error) {
        return errorResponse(res, error.message)
    }
})

module.exports = route