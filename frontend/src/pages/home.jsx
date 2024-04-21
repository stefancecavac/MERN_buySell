import { useEffect, useState } from "react"
import { UseProductContext } from "../hooks/useProductHook"
import ProductCard from "../components/productCard/productCard"
import { Link } from "react-router-dom"


const Home = () => {
    const { products, dispatch } = UseProductContext()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`http://localhost:4000/api/products`)
            const json = await response.json()

            if (response.ok) {
                setLoading(false)
                dispatch({ type: 'SET_PRODUCTS', payload: json })
            }
        }
        fetchProducts()
    }, [dispatch])

    return (
        <div className="m-10 grid grid-cols-6 gap-5">
            {loading ?
                <p>loading ...</p> :
                products && products.map((product) => (
                    <Link className="rounded transition-all hover:translate-y-1 hover:scale-110" 
                    to={`/${product._id}`} key={product._id}><ProductCard product={product}></ProductCard></Link>
                ))
            }
        </div>
    )
}

export default Home