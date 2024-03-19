const express = require("express");
const { getAllCategoriesWithItemCount } = require("./category.service");
const { notFoundResponse, successResponse, errorResponse } = require("../../helpers/jsonResponse");

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const dataCategories = await getAllCategoriesWithItemCount()
        if (!dataCategories[0]) {
            return notFoundResponse(res)
        }

        return successResponse(res, dataCategories)
    } catch (error) {
        return errorResponse(res, error)
    }
})

module.exports = route