const Product = require("../Models/products.model");
const ErrorHandler = require("../util/errorhnadler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../util/apiFeatures");

//Create Product -- Admin
exports.createProducts = catchAsyncError(async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
})

//Get All Products
exports.getAllProducts = catchAsyncError( async (req, res) => {
    const productCount = await Product.countDocuments()
    const resultPerPage = 10;
    const apiFeatuers = new ApiFeatures(Product, req.query).search().filter().pagination(resultPerPage);
    const allProducts = await apiFeatuers.query;
    res.status(200).json({
        success: true,
        allProducts,
        productCount
    });
})

//Get Single Product Details
exports.getProductDetails = catchAsyncError( async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product Not Found", 404));
    }
    else {
        res.status(200).json({
            success: true,
            product
        });
    }
})

//Update Product -- Admin
exports.updateProduct = catchAsyncError( async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product Not Found", 404));
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})

    res.status(200).json({
        success: true,
        product
    })
})


//Delete Product -- Admin
exports.deleteProduct = catchAsyncError( async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product Not Found", 404));
    }
    else{
        await product.remove();

        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully"
        })
    }
    
})