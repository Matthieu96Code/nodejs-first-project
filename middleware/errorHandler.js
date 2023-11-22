const { constants } =require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ 
                title: "Validation Failed",
                message: err.message,
                stackTracer: errstack,
            });
            break;
        case constants.NOT_FOUND:
            res.json({ 
                title: "Not Found",
                message: err.message,
                stackTracer: errstack,
            });
        case constants.UNAUTHORIZED:
            res.json({ 
                title: "Unauthorized",
                message: err.message,
                stackTracer: errstack,
            });
        case constants.FORBIDDEN:
            res.json({ 
                title: "Forbidden",
                message: err.message,
                stackTracer: errstack,
            });
        case constants.SERVER_ERROR:
            res.json({ 
                title: "Server error",
                message: err.message,
                stackTracer: errstack,
            });
        default:
            console.log("No Error, All good !");
            break
    }
};

module.exports = errorHandler;