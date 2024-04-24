import {UseProductContext} from '../../hooks/useProductHook'

const AddToCart = ({id}) => {

    const{dispatch} = UseProductContext()
 
    const handleAddToCart = async() => {
        const response = await fetch(`http://localhost:4000/api/cart`,{
            method:'POST',
            body: JSON.stringify({product:id}),
            headers: { 'Content-Type': 'application/json' },
            credentials:"include"
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type:'ADD_TO_CART', payload:json})
        }
    }

    return(
        <button onClick={handleAddToCart}>Add to Cart</button>
    )
}

export default AddToCart