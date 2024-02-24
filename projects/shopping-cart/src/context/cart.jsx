import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

export const CartContext=createContext();

export function CartProvider ({children}){
    const {state,addToCart,lessToCart,removeToCart,clearCart}=useCartReducer();
    return (
        <CartContext.Provider value={{
            state,
            addToCart,
            lessToCart,
            removeToCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}