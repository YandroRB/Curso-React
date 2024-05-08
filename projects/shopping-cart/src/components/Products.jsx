import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { AddToCartIcon, RemoveToCartIcon, StarIcon } from "./Icons";
import './Products.css'
import { createPortal } from "react-dom";
import { Modal } from "./Modal";

const overlays= document.getElementById('overlays');



function ProductItem({product,selectedImage}){
  const {addToCart,removeToCart,state:cart}=useCart();
  const checkInCart = cart.some(item=>item.id === product.id);
  const { title, price, thumbnail,rating } = product;
  return (
    <li className="product" >
      <div onClick={()=>selectedImage(thumbnail)} className="product-image">
      <img src={thumbnail} alt={title} />
      <span><StarIcon width={15} height={15} color={"#FFA500"}/>{rating}</span>
      </div>
      <p>
        {title} <span>$ {price}</span>
      </p>
      <button 
      style={{backgroundColor:checkInCart?"hsl(0, 0%, 63%)":"hsl(0, 0%, 0%)"}}
      title="Añadir al carrito" onClick={()=>checkInCart?removeToCart(product):addToCart(product)}>
        {
          checkInCart?<RemoveToCartIcon color={"#000"} fill={"#000"} width={30} height={30}/>:<AddToCartIcon color={"#fff"} width={30} height={30}/>
        }
      </button>
    </li>
  );
}

export function Products({ products }) {
  const [modalOpen,setModalOpen] = useState (false);
  const [imageProduct,setImageProduct]=useState('');
  const selectedImage=(thumbnail)=>{
    setImageProduct(thumbnail);
    setModalOpen(!modalOpen);
  }
  
  return (
    <>
    <ul className="products-container">
      {products.map((product) => <ProductItem key={product.id} selectedImage={selectedImage} product={product} /> )}
    </ul>
    {modalOpen && createPortal(
      <Modal imageProduct={imageProduct} setModalOpen={setModalOpen} />,
      overlays
    )}
    </>
  );
}
