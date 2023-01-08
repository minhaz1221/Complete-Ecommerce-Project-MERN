const Product = require("../Models/products.model");


//Create Product -- Admin
exports.createProducts = async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}

//Get All Products
exports.getAllProducts = async (req, res) => {
    const allProducts = await Product.find();
    res.status(200).json({
        success: true,
        allProducts
    });
}

//Get Single Product Details
exports.getProductDetails = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }
    else {
        res.status(200).json({
            success: true,
            product
        });
    }
}

//Update Product -- Admin
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
        res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})

    res.status(200).json({
        success: true,
        product
    })
}


//Delete Product -- Admin
exports.deleteProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
        res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }
    else{
        await product.remove();

        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully"
        })
    }
    
}