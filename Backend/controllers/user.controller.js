const ErrorHandler = require("../util/errorhnadler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require('../Models/user.model');
const sendToken = require("../util/JWTToken");

//Register a User
exports.registerUser = catchAsyncError(async (req,res,next) => {
    const {name, email, password} = req.body;
    const user = await User.create({
            name,
            email,
            password,
            avatar: {
                public_id: "This is a sample Id",
                url: "ProfilePicUrl"
            }
        });

        sendToken(user,201, res);
});

//Login

exports.loginUser = catchAsyncError(async (req, res, next) => {
    const {email, password} = req.body;

    //checking if User has given email and password both
    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email and Password",400))
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return new ErrorHandler("Invalid Email or Password", 401);
    }

    const isPasswordMatch = user.comparePassword(password);

    if(!isPasswordMatch){
        return new ErrorHandler("Invalid Email or Password", 401);
    }

    sendToken(user,200, res)
})

//Logout Methode

exports.logout = catchAsyncError(async (req,res,next) => {
    res.cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Logged Out Successfully"
    })
})