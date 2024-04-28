import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UseProductContext } from "../hooks/useProductHook"
import AddToCart from "../components/cart/addToCart"

const ProductDetailPage = () => {
    const { singleProduct, dispatch } = UseProductContext()
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    const [selectedTab, setSelectedTab] = useState('INFO')

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
    }, [dispatch, id])

    console.log(selectedTab)

    return (
        loading ?

            <p>loading ... </p> :

            <div className="mx-52 my-10 bg-main h-3/4 flex justify-center shadow rounded ">
                <div className=" w-full ">
                    <img className="bg-gray-300 w-full h-full shadow " src={'../../../public/sofa.jpeg'} alt="image"></img>
                </div>

                <div className=" w-full m-10">
                    <div className="flex gap-2">{singleProduct.tags.map((tag) => (
                        <p className="text-primary text-lg" key={tag}>{tag}</p>
                    ))}</div>
                    <p className="text-white text-4xl my-5  ">{singleProduct.product_name}</p>
                    <p className="text-white text-5xl border-b-2 p-2 border-gray-500">{new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(singleProduct.price)}</p>

                    <div className="text-2xl flex justify-evenly  mt-20 mb-5">
                        {['INFO', 'DESCRIPTION', "COMMENTS"].map((tab) => (
                            <label onClick={() => setSelectedTab(tab)}
                                className={`flex hover:cursor-pointer text-gray-500 border-b-2 border-gray-500 ${selectedTab === tab ? 'text-white border-primary' : ''}`}
                                key={tab}>
                                <input className="hidden" type="radio" name="category" value={tab}></input>
                                {tab}
                            </label>
                        ))}
                    </div>

                    {selectedTab === 'INFO' &&
                        <div>
                            <AddToCart id={id}></AddToCart>
                        </div>}

                    {selectedTab === 'DESCRIPTION' &&
                        <div>DESCRIPTION</div>}

                    {selectedTab === 'COMMENTS' &&
                        <div>COMMENTS</div>}
                </div>
            </div>


    )
}

export default ProductDetailPage