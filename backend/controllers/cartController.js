import Cart from '../models/cartModel.js'


const getCart = async (req, res) => {
    const user_id = req.user._id
    try {
        const cart = await Cart.find({ user_id }).populate('products')
        res.status(200).json(cart)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const addToCart = async (req, res) => {
    const { product } = req.body
    const user_id = req.user._id

    try {
       
        const cart = await Cart.findOneAndUpdate(
            { user_id },
            { $push: { products: product} },
            { new: true, upsert: true })

        res.status(201).json(cart)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const removeFromCart = async (req, res) => {
    const { id } = req.params
    const user_id = req.user._id

    try {
        const cart = await Cart.findOneAndUpdate(
            { user_id },
            { $pull: { products: id } })

        res.status(201).json(cart)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export { getCart, addToCart,removeFromCart }