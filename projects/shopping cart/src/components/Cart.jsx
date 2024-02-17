import { useId } from "react";
import { CartIcon, DeleteToCartIcon, RemoveToCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
import "./Cart.css"

function CartItem({ product }) {
  const { addToCart, lessToCart, removeToCart } = useCart();
  const { thumbnail, title, quantity, totalPrice } = product;
  return (
    <li>
      <div>
        <img src={thumbnail} alt={title} />
      </div>
      <p>{title}</p>
      <div>
        <span>{quantity}</span>
        <button onClick={() => addToCart(product)}>➕</button>
        <button
          onClick={() => lessToCart(product)}
          disabled={quantity > 1 ? false : true}
        >
          ➖
        </button>
      </div>
      <p>{totalPrice}</p>
      <button onClick={() => removeToCart(product)}>
        <DeleteToCartIcon />
      </button>
    </li>
  );
}

function Cart() {
  const cartCheckBox = useId();
  const { state: cartList, clearCart } = useCart();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBox}>
        <CartIcon width={50} height={50} />
      </label>
      <input id={cartCheckBox} type="checkbox" hidden />
      <aside className="cart-container">
        <ul>
          {cartList.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
        <button>
          <RemoveToCartIcon onClick={() => clearCart()} />
        </button>
      </aside>
    </>
  );
}

export default Cart;
