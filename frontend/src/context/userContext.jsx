import { createContext, useEffect, useReducer } from "react";


export const UserContext = createContext()

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            }
        case 'LOGOUT':
            return null
    }
}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, {
        user: null
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            dispatch({ type: 'LOGIN' , payload:user })
        }
    }, [])

    console.log(state)
    return (
        <UserContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}