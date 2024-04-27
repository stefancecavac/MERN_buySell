

const ProductCard = ({ product }) => {

    return (
        <div className="rounded shadow bg-white  flex flex-col overflow-hidden">
            <img className="bg-gray-300 w-full h-52 " alt="image"></img>

            <p className="ml-3 mt-3 text-xl text-gray-600">{product.product_name}</p>
            <p className="ml-3 text-blue-500  text-3xl flex items-center gap-2">{product.price}€ <span className="text-gray-600 text-base">  / price</span></p>
          
            <p className="ml-3 mt-5">user reviews:</p>
        </div>
    )
}

export default ProductCard