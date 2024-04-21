import { createContext, useReducer } from "react";


export const ProductContext = createContext()

export const ProductReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                products: action.payload
            }
        case 'SET_PRODUCT':
            return {
                singleProduct: action.payload
            }
        case 'POST_PRODUCT':
            return {
                products: [action.payload]
            }
        case 'DELETE_PRODUCT':
            return {
                products: state.products.filter((products) => products._id !== action.payload._id)
            }
    }

}

export const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, {
        products: null ,singleProduct: null
    })

    console.log(state)
    return (
        <ProductContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}