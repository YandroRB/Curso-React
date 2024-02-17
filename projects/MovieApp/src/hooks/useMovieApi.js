import { useEffect, useState } from "react";
import { getMovieList } from "../services/movieList";

export function useMovieApi (Endpoint){
    const [data,setData]=useState([]);
    const renewData=(endpoint=Endpoint)=>{
        try {
            getMovieList(endpoint).then(newMovieList =>setData(newMovieList));
            
          } 
        catch (error) {
            console.error(error);
        }
    }
    useEffect(renewData,[Endpoint]);
    return {data,renewData};
}