import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters (){
    const {filters,setFilters}= useContext(FiltersContext);
    function filteredProducts(products){
        const results= products.filter(product => {
            const {price,category}= product;
            return price >= filters.price && (filters.category === 'all' || filters.category === category);
        })
        if( filters.orderBy === 'desc') return results.sort((itemA,itemB)=> itemB.rating - itemA.rating);
        if( filters.orderBy === 'asc') return results.sort((itemA,itemB)=> itemA.rating - itemB.rating);
        return results;
    }
    return {filters,setFilters,filteredProducts};
}