import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { AddToCartIcon } from "./Icons";
import './Products.css'
import { createPortal } from "react-dom";
import { Modal } from "./Modal";

const overlays= document.getElementById('overlays');



function ProductItem({product,selectedImage}){
  const {addToCart}=useCart();
  const { title, price, thumbnail,rating } = product;
  return (
    <li className="product" >
      <div onClick={()=>selectedImage(thumbnail)} className="product-image">
      <img src={thumbnail} alt={title} />
      </div>
      <p>
        {title} — $<span>{price}</span> — <span>{rating}</span>
      </p>
      <button onClick={()=>addToCart(product)}>
        <AddToCartIcon />
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
