

const ProductCard = ({ product }) => {

    return (
        <div className="rounded shadow bg-main  flex flex-col overflow-hidden">
            <img className="bg-gray-300 w-full h-52 shadow " src={'/sofa.jpeg'} alt="image"></img>

            <div className="flex flex-col">
                <p className="ml-3 mt-3 text-xl text-white">{product.product_name}</p>
                <p className="ml-3 text-primary  text-3xl flex items-center gap-2">
                    {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(product.price)}
                    <span className="text-white text-base">  / price</span></p>

                <p className="ml-3 my-5 text-primary">user reviews:</p>
            </div>

        </div>
    )
}

export default ProductCard