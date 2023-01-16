const jwt = require("jsonwebtoken");
const User = require("../Models/user.model");
const ErrorHandler = require("../util/errorhnadler");
const catchAsyncError = require("./catchAsyncError");

exports.isAuthenticatedUser = catchAsyncError(async (req,res,next) => {
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please Login to access this resourse", 401));
    }

    const decodedData = jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);

    next();


})