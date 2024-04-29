import { useEffect} from "react"
import { UseProductContext } from "../hooks/useProductHook"
import RemoveFromCart from "../components/cart/removeFromCart"

const Cart = () => {
    const{cart, dispatch} = UseProductContext()

    useEffect(() => {
        const fetchCart = async() => {
            const response = await fetch(`http://localhost:4000/api/cart`,{
                headers: { 'Content-Type': 'application/json' },
                credentials:"include"
            })
            const json = await response.json()

           

            if(response.ok){
                dispatch({type:'SET_CART' , payload:json})
            }
        }
        fetchCart()
    },[dispatch])
    
    return(
        <div> 
           {cart && cart.products && cart.products.map((product) => (
            <div className="flex" key={product._id}>
                <p>{product.product_id.product_name}</p>
                <p>{product.quantity}</p>
                <RemoveFromCart product_id={product.product_id._id}></RemoveFromCart>
            </div>
           ))}
        </div>
    )
}

export default Cart