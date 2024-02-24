import { useId } from "react"
import "./Filters.css"
import { BarIcon } from "./Icons";
import FiltersContainer from "./FiltersContainer";

export function Filters (){
    const filtersCheckBox=useId();
    return (
        <>
        <label title="Filtros" className="filters-button" 
        htmlFor={filtersCheckBox}><BarIcon width={30} height={30}/></label>
        <input type="checkbox" id={filtersCheckBox} hidden/> 
        <FiltersContainer filtersCheckBox={filtersCheckBox} />
        </>
    )
}
