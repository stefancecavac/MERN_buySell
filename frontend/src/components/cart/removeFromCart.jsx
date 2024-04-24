import { UseProductContext } from "../../hooks/useProductHook"
import { useState } from 'react'


const RemoveFromCart = ({product_id}) => {

    const{dispatch} = UseProductContext()
 
    const [quantity , setQuantity] = useState('')

    const handleRemoveFromCart = async() => {
        const response = await fetch(`http://localhost:4000/api/cart`,{
            method:'DELETE',
            body: JSON.stringify({product:product_id , quantity}),
            headers: { 'Content-Type': 'application/json' },
            credentials:"include"
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type:'REMOVE_FROM_CART', payload:json})
            dispatch({type:'SET_CART', payload:json})

        }
    }

    return(
        <div>
        <button onClick={handleRemoveFromCart}>Remove From cart</button>

             <input type='number' onChange={(e) => setQuantity(e.target.value)}
                value={quantity}></input>
        </div>
    )

}

export default RemoveFromCart