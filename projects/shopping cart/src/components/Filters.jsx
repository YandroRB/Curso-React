import { useId } from "react"
import { useFilters } from "../hooks/useFilters";

export function Filters (){
    const priceInputID= useId();
    const categoryInputID= useId();
    const orderByInputID=useId();
    const {filters,setFilters}= useFilters();

    const handleRangeChange = event =>{
        setFilters(prevEvent => ({
            ...prevEvent,
            price:event.target.value
        }))
    }

    const handleCategorySelectChange = event =>{
        setFilters ( prevEvent =>({
            ...prevEvent,
            category:event.target.value
        }))
    }
    const handleOrderSelectChange = event =>{
        setFilters(prevEvent => ({
            ...prevEvent,
            orderBy:event.target.value
        }))
    }

    return (
        <> 
        <div>
            <label htmlFor={priceInputID}>Precio minimo</label>
            <input onChange={handleRangeChange} value={filters.price} type="range" id={priceInputID} min={0} max={1000} />
            <span>$ {filters.price}</span>
        </div>
        <div>
            <label htmlFor={categoryInputID}>Categoria</label>
            <select onChange={handleCategorySelectChange} defaultValue={filters.category} id={categoryInputID}>
                <option value="all">Todas</option>
                <option value="smartphones">Celulares</option>
                <option value="laptops">Portatiles</option>
                <option value="fragrances">Perfumes</option>
                <option value="home-decoration">Para el Hogar</option>
                <option value="womens-dresses">Ropa de mujer</option>
                <option value="furniture">Muebles</option>
            </select>
        </div>
        <div>
            <label htmlFor={orderByInputID}>Orden de calificacion</label>
            <select onChange={handleOrderSelectChange} defaultValue={filters.orderBy} id={orderByInputID}>
                <option value="none">Ninguna</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
        </div>
        </>
    )
}