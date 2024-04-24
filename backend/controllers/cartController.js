import Cart from '../models/cartModel.js'


const getCart = async (req, res) => {
    const user_id = req.user._id
    try {
        const cart = await Cart.findOne({ user_id }).populate('products.product_id')
        res.status(200).json(cart)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const addToCart = async (req, res) => {
    const { product ,quantity } = req.body
    const user_id = req.user._id

    try {
        let cart = await Cart.findOne({ user_id })

        if (!cart) {
            cart = new Cart({ user_id, products: [{ product_id: product, quantity }] })
        } else {
            const existingProductIndex = cart.products.findIndex(item => item.product_id.toString() === product)

            if (existingProductIndex !== -1) {
                cart.products[existingProductIndex].quantity += parseInt(quantity)
            } else {
                cart.products.push({ product_id: product, quantity })
            }
        }

        await cart.save()

        res.status(201).json(cart)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const removeFromCart = async (req, res) => {
    const { product , quantity } = req.body
    const user_id = req.user._id

    try {
        let cart = await Cart.findOne({ user_id })
        const existingProductIndex = cart.products.findIndex(item => item.product_id.toString() === product)

        if (cart && cart.products && cart.products[existingProductIndex] && cart.products[existingProductIndex].quantity > 1) {
            cart.products[existingProductIndex].quantity -=parseInt(quantity)
        } else {
            if (cart && cart.products && cart.products[existingProductIndex]) {
                cart.products.splice(existingProductIndex, quantity)

            }

        }
        cart.populate('products.product_id')
        
        await cart.save()
        res.status(201).json(cart)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export { getCart, addToCart, removeFromCart }