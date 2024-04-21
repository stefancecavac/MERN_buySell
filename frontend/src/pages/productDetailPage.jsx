import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UseProductContext } from "../hooks/useProductHook"

const ProductDetailPage = () => {
    const { singleProduct, dispatch } = UseProductContext()
    const [loading , setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`http://localhost:4000/api/products/${id}`)
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_PRODUCT', payload: json })
                setLoading(false)
            }
        }
        fetchProducts()
    }, [dispatch,id])

    return (
        <div>
            {loading ? 
            <p>loading ... </p> :
            <p>{singleProduct.product_name}</p>
            }
          
        </div>
    )
}

export default ProductDetailPage