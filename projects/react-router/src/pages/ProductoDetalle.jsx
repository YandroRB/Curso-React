import { useParams,useNavigate } from "react-router-dom"

function obtenerProducto(id){
    const products = [
        {id:1,name:'Cellphone',price:451},
        {id:2,name:'Laptop',price:781},
        {id:3,name:'Desktop-PC',price:702},
        {id:4,name:'Solid Disk MVE 2.0',price:71},
    ]
    return products.find((product)=> product.id.toString()=== id);
}

function ProductoDetalle() {
    const {id}=useParams()
    const {id:idProduct,name,price} = obtenerProducto(id);
    const navigate =useNavigate();
    const handleGoToBack= ()=>{
        navigate('/productos');
    }
  return (
    <>
        <h1>Productos</h1>
        <article>
            <h2>{name}</h2>
            <p>$ {price}</p>
            <span>{idProduct}</span>
        </article>
        <button onClick={handleGoToBack}>Regresar</button>
    </>
  )
}

export default ProductoDetalle