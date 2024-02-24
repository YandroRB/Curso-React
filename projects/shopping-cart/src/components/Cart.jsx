import { useId } from "react";
import { CartIcon, CloseIcon, IconClose, IconMinus, IconPlus, RemoveToCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
import "./Cart.css"

function CartItem({ product }) {
  const { addToCart, lessToCart, removeToCart } = useCart();
  const { thumbnail, title, quantity, totalPrice } = product;
  return (
    <li className="product-item">
      <div className="item-image">
        <img src={thumbnail} alt={title} />
      </div>
      <p className="item-title">{title}</p>
      <p className="item-price">$ {totalPrice}</p>
      <div className="item-controls">
      <button
        className="control-less"
        title="Quitar Cantidad"
          onClick={() => lessToCart(product)}
          disabled={quantity > 1 ? false : true}
        >
          <IconMinus width={15} height={15} fill={"#000"}/>
        </button>
        
        <span>  {quantity}  </span>
        <button className="control-plus" 
        title="Agregar cantidad" 
        onClick={() => addToCart(product)}>
         <IconPlus width={15} height={15} fill={"#fff"}/>
        </button>
      </div>
      <button title={`Quitar ${title} del carro`} className="item-remove" onClick={() => removeToCart(product)}>
        <IconClose width={20} height={20} />
      </button>
    </li>
  );
}

function Cart() {
  const cartCheckBox = useId();
  const { state: cartList, clearCart } = useCart();
  return (
    <>
      <label title="Carrito" className="cart-button" htmlFor={cartCheckBox}>
        <CartIcon width={35} height={35} />
      </label>
      <input id={cartCheckBox} type="checkbox" hidden />
      <aside className="cart-container">
        <h1>Carro de compras</h1>
        <label htmlFor={cartCheckBox}><CloseIcon width={35} height={35}/></label>
        <ul className="products-list">
          {cartList.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
        <button className="cart-removeAll" onClick={() => clearCart()} title="Remover todo">
          <RemoveToCartIcon width={25} height={25}/> Quitar Todo
        </button>
      </aside>
    </>
  );
}

export default Cart;
