import {CartIcon,ClearCartIcon} from "./Icons.jsx";
import {useId} from "react";
import './Cart.css'
import {useCart} from "../hooks/useCart.js";

function CartItem({thumbnail,price,title,quantity,addToCart}){
    return (
        <li>
            <img src={thumbnail}
                 alt={title}
            />
            <div>
                <strong>{title}</strong> — ${price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>➕</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckBox = useId();
    const {cart, clearCart,addToCart} = useCart()
    return (
        <>
            <label htmlFor={cartCheckBox} className='cart-button'>
                <CartIcon/>
            </label>
            <input id={cartCheckBox} type='checkbox' hidden/>
            <aside className='cart'>
                <ul>
                    {cart.map(product =>(
                        <CartItem key={product.id} addToCart={()=>addToCart(product)} {...product} />
                    ))}

                </ul>
                <button onClick={clearCart}><ClearCartIcon/></button>
            </aside>
        </>
    )
}