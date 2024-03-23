const express = require("express");
const { getAllCategoriesWithItemCount } = require("./category.service");
const { notFoundResponse, successResponse, errorResponse } = require("../../helpers/jsonResponse");

const route = express.Router();

route.get('/', async (req, res) => {
    const dataCategories = await getAllCategoriesWithItemCount()
    console.log(dataCategories)
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

module.exports = route