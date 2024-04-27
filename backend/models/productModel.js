import mongoose, { Mongoose } from "mongoose";
const Schema = mongoose.Schema

const productSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    tags: [{
        type: String
    }],
    stock_quantity: {
        type: Number,
        default: 0
    },
    images: [{
        type: String 
    }],
}, { timestamps: true })

export default mongoose.model('Product', productSchema)