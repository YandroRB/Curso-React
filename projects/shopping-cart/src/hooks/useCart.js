import { useContext } from "react";
import { CartContext } from "../context/cart";

export function useCart(){
    const context = useContext(CartContext);
    if (context === undefined ) throw new Error ('useCart no ha encontrado el contexto al que intenta acceder');
    return context;
}