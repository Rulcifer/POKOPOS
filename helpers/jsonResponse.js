exports.successResponse = (res, data, message = null) => {
    if (message == null) {
        message = 'Successfully fetching data'
    }
    return res.status(200).json({
        meta: {
            code: 200,
            status: "success",
            message: message
        },
        data: data
    });
};

exports.notFoundResponse = (res) => {
    return res.status(404).json({
        meta: {
            code: 404,
            status: "error",
            message: "Data Not Found"
        }
    });
};

exports.errorResponse = (res, error) => {
    return res.status(500).json({
        meta: {
            code: 500,
            status: "error",
            message: error
        }
    });
};