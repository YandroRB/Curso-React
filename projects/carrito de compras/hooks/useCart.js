import {useContext} from "react";
import {CartContext} from "../context/cart.jsx";

export function useCart(){
    const context=useContext(CartContext);
    if(context === undefined) throw new Error('useCart no ha encotrado el contexto al que intentas acceder');

    return context
}