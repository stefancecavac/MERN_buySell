import mongoose from "mongoose"
const Schema = mongoose.Schema

const whishListSchema = new Schema({
    products:[{
        product_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Product'
        }
    }],
    user_id:{
        type: mongoose.Types.ObjectId,
        ref:"User"
    }
})

export default mongoose.model('WhishList' , whishListSchema)