import { useState } from 'react'
import {UseProductContext} from '../../hooks/useProductHook'

const AddToCart = ({id}) => {

    const{dispatch} = UseProductContext()

    const [quantity , setQuantity] = useState(1)
 
    const handleAddToCart = async() => {
        const response = await fetch(`http://localhost:4000/api/cart`,{
            method:'POST',
            body: JSON.stringify({product:id , quantity}),
            headers: { 'Content-Type': 'application/json' },
            credentials:"include"
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type:'ADD_TO_CART', payload:json})
        }
    }

    return(
        <div>
        <button onClick={handleAddToCart}>Add to Cart</button>
            <input type='number' onChange={(e) => setQuantity(e.target.value)}
                value={quantity}></input>
        </div>
    )
}

export default AddToCart