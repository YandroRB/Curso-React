import {createContext, useReducer} from "react";
import {cartInitialState, cartReducer} from "../reducers/cart.js";


export  const CartContext=createContext();

function useCartReduce(){
    const [state,dispatch]=useReducer(cartReducer,cartInitialState);
    const addToCart=product=> dispatch({
        type:'ADD_TO_CART',
        payload:product
    })
    const removeFromCart=product => dispatch({
        type:'REMOVE_FROM_CART',
        payload:product
    })

    const clearCart=()=> dispatch({
        type:'CLEAR_CART'
    })
    return {state,addToCart,removeFromCart,clearCart}
}
export function CartProvider({children}){
    const {state,addToCart,clearCart,removeFromCart}=useCartReduce();
    return(
        <CartContext.Provider value={{
            cart:state,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}