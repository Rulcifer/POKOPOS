const express = require("express");
const { getAllProducts } = require("./product.service");
const { successResponse, errorResponse, notFoundResponse } = require("../../../helpers/jsonResponse");

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllProducts()
        if (!data[0]) {
            return notFoundResponse(res)
        }
        return successResponse(res, data, 'Successfully fetching data')
    } catch (error) {
        return errorResponse(res, error.message)
    }
})

module.exports = route;