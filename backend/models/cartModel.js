import mongoose from 'mongoose'
const Schema = mongoose.Schema

const cartSchema = new Schema({
    products:[{
        type:mongoose.Types.ObjectId,
        ref:'Product'
    }],
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
})


export default mongoose.model('Cart',cartSchema)