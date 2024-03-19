const express = require("express");
const { getAllProducts } = require("./product.service");
const { successResponse, errorResponse, notFoundResponse } = require("../../helpers/jsonResponse");

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const dataProducts = await getAllProducts()
        if (!dataProducts[0]) {
            return notFoundResponse(res)
        }
        return successResponse(res, dataProducts, 'Successfully fetching data')
    } catch (error) {
        return errorResponse(res, error)
    }
})

module.exports = route;