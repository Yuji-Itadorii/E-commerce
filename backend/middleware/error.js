const ErrorHandler = require("../utils/errorHandeler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //Wrong Mongodb id error

  if (err.name === "CastError") {
    const message = `Resource not found : ${err.path}`;

    err = new ErrorHandler(message, 400);
  }

  // Mongoose duplicate key Error
  if(err.code == 11000){
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }


  // wrong Json token
  if(err.name == "JsonWebTokenError"){
    const message = `Json Web Token is invalid, try again`;
    err = new ErrorHandler(message, 400);
  }

  // JWT expire error

  if(err.name == "TokenExpiredError"){
    const message = `Json Web Token is expired, try again`;
    err = new ErrorHandler(message, 400);
  }



  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
