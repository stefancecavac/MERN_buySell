import mongoose, { Mongoose } from "mongoose";
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
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
} , {timestamps:true})

export default mongoose.model('Product' , productSchema)