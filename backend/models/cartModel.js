import mongoose, { mongo } from 'mongoose'
const Schema = mongoose.Schema

const cartSchema = new Schema({
    products:[{
        product_id:{
            type:mongoose.Types.ObjectId,
            ref:'Product'
        },
        quantity:{
            type:Number
        }
    }],
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
})


export default mongoose.model('Cart',cartSchema)