import { createContext, useReducer } from "react";


export const ProductContext = createContext()

export const ProductReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'SET_PRODUCT':
            return {
                ...state,
                singleProduct: action.payload
            }
        case 'POST_PRODUCT':
            return {
                ...state,
                products: [action.payload]
            }
        case 'DELETE_PRODUCT':
            return {
                products: state.products.filter((products) => products._id !== action.payload._id)
            }


        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [action.payload]
            }

        case 'SET_CART':
            return {
                ...state,
                cart: action.payload
            }
    }

}

export const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, {
        products: null, singleProduct: null, cart: null
    })

    console.log(state)
    return (
        <ProductContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}