import WhishList from '../models/whishListModel.js'


const getWhishList = async (req, res) => {
    const user_id = req.user._id
    try {
        const whishList = await WhishList.find({ user_id }).populate('products.product_id')
        res.status(200).json(whishList)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const addToWhishList = async (req, res) => {
    const { product } = req.body;
    const user_id = req.user._id;

    try {
        let wishlist = await WhishList.findOne({ user_id });

        if (!wishlist) {
            wishlist = new WhishList({ user_id, products: [{ product_id: product }] });
        }

        const existingProductIndex = wishlist.products.findIndex(item => item.product_id.toString() === product);

        if (existingProductIndex === -1) { 
            wishlist.products.push({ product_id: product })

            await wishlist.save();

            res.status(200).json(wishlist);
        } else {
            wishlist.products.pull({ _id: wishlist.products[existingProductIndex]._id })
            await wishlist.save()

            res.status(200).json(wishlist)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export { getWhishList, addToWhishList }