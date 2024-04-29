import { useState } from 'react'
import { UseProductContext } from '../../hooks/useProductHook'
import SuccesPopup from '../popup/succesPopup'

const AddToCart = ({ id }) => {

    const { dispatch } = UseProductContext()

    const [quantity, setQuantity] = useState(1)
    const [succes, setSuccess] = useState(null)
    const [error ,setError] = useState(null)

    const handleAddToCart = async () => {
        const response = await fetch(`http://localhost:4000/api/cart`, {
            method: 'POST',
            body: JSON.stringify({ product: id, quantity }),
            headers: { 'Content-Type': 'application/json' },
            credentials: "include"
        })
        const json = await response.json()

        if(quantity === 0) {
            setError(true)
        }
        if (response.ok) {
            setSuccess(true)
            setError(null)
            dispatch({ type: 'ADD_TO_CART', payload: json })
        }
    }

    return (
        <div className='flex flex-col  m-auto items-center mt-20'>
            <p className='text-white'>QUANTITY</p>
            <div className='flex rounded-full bg-neutral-900 w-fit p-2 px-4 gap-2 m-auto mb-8 mt-2 '>
                <button onClick={() => setQuantity(prevQuantity => prevQuantity > 0 ? prevQuantity - 1 : 0)} className='text-white'>-</button>

                <input readOnly className='w-10 bg-neutral-900 text-white text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type='number'
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}></input>

                <button onClick={() => setQuantity(prevQuantity => prevQuantity + 1)} className='text-white'>+</button>
            </div>

            <button className='my-5 flex  rounded-full m-auto w-4/5 justify-center p-2  border-2 border-white text-white hover:bg-white hover:text-main'>Add to whishlist</button>
                <button className={`flex text-main  rounded-full m-auto w-4/5 justify-center p-2 border-2 border-primary  bg-primary hover:bg-yellow-700 hover:border-yellow-700 hover:text-white`} onClick={handleAddToCart}>Add to Cart</button>
                {succes && <SuccesPopup setSuccess={setSuccess} quantity={quantity}></SuccesPopup>}
                {error && <div>error</div>}

        </div>
    )
}

export default AddToCart