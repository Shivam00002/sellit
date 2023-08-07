import { createContext, useState } from "react";

export const CartContext=createContext({})



export const CartContextProvider=({children})=>{
    const [cartItem,setCartItem]=useState([{id:1}])


    return (
        <CartContext.Provider value={{cartItem,setCartItem}}>
            {children}
        </CartContext.Provider>
    )
}