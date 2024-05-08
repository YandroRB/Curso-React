import './Footer.css'
import {useCart} from "../hooks/useCart.js";
export function Footer({filters}){
    const {cart}=useCart();
    return(
        <footer className='footer'>
            <p>Estamos en construccion, por favor tenga la amabilidad de no usar la pagina....</p>
        </footer>
    )
}