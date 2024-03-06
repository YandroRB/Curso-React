import { Link } from "react-router-dom"

function Productos() {
    const products = [
        {id:1,name:'Cellphone',price:451},
        {id:2,name:'Laptop',price:781},
        {id:3,name:'Desktop-PC',price:702},
        {id:4,name:'Solid Disk MVE 2.0',price:71},
    ]
  return (
    <>
        <h1>Productos</h1>
        <ul>
            {products.map((product)=>{
                const {id,name,price}=product
                return <li key={id}>
                    <Link to={`/productos/${id}`}>{name} - {price}</Link>
                </li>
            })}
        </ul>
    </>
  )
}

export default Productos