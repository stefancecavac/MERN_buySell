

const ProductCard = ({product}) => {

    return(
        <div className="rounded-md shadow-md bg-blue-300 p-5">
            <p>{product.product_name}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductCard