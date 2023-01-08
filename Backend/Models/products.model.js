const mongoose = require('mongoose');

const Products = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please Enter Product Description"],
    },
    price: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [8, "Price cannot exceed 8 character"]
    },
    rating: {
        type: Number,
        default: 0,
    },
    image: [
        {
            public_id: {
                type: String,
                required: [true, "Please Enter Product Name"]
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    catagory: {
        type: String,
        required: [true, "Please Enter Product Catagory"]
    },
    stock: {
        type: Number,
        required: [true, "Please Enter Product Stock"],
        maxLength: [4, "Stock cannot exceed 8 character"],
        default: 1
    },
    numOfReviews: {
        type: Number,
        default: 0

    },
    reviews: [
        {
            name: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
    
    })

module.exports = mongoose.model("Products", Products);