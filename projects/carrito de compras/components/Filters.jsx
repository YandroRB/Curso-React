import {useId} from "react";
import './FIlters.css';
import {useFilters} from "../hooks/useFilters.js";
export function Filters() {
    const {filters,setFilters}=useFilters()
    const minPriceID=useId();
    const categoryID=useId();
    const handleChangeRange=(event)=>{
        setFilters(prev => ({
            ...prev,
            price:event.target.value
        }))
    }
    const handleChangeSelect = (event) =>{
        setFilters(prev => ({
            ...prev,
            category:event.target.value
        }))
    }
    return (
        <section className={'filters'}>
            <div>
                <label htmlFor={minPriceID}>
                    Precio minimo
                </label>
                <input id={minPriceID}
                       type='range'
                       min='0'
                       max='1000'
                       value={filters.price}
                       onChange={handleChangeRange}
                />
                <span>${filters.price}</span>
            </div>
            <div>
                <label htmlFor={categoryID}>Categoria</label>
                <select defaultValue={filters.category} onChange={handleChangeSelect} id={categoryID}>
                    <option value='all'>Todas</option>
                    <option value='home-decoration'>Decoraciones del hogar</option>
                    <option value='laptops'>Portatiles</option>
                    <option value='smartphones'>Celulares</option>
                    <option value='fragrances'>Perfumes</option>
                    <option value='skincare'>Para la piel</option>
                    <option value='groceries'>Comida</option>
                </select>
            </div>
        </section>
    )
}