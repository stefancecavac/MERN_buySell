

const ProductCard = ({ product }) => {

    return (
        <div className="rounded shadow   flex flex-col overflow-hidden">
            <img className="bg-red-500 w-full h-36 " alt="image"></img>

            <p className="p-3">{product.product_name}</p>

            <div className="p-3">
                <p className="text-green-500 text-2xl">{product.price}€</p>
            </div>

        </div>
    )
}

export default ProductCard