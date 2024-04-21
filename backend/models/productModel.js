import mongoose from "mongoose";
const Schema = mongoose.Schema

const productSchema = new Schema({
    product_name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
} , {timestamps:true})

export default mongoose.model('Product' , productSchema)