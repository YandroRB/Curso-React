import { useEffect,useState } from "react";
import { getFactRandom } from "../services/facts.js";
export function useCatFact (){
    const [fact,setFact]=useState();
    const refreshFact=()=>{getFactRandom().then(newFact => setFact(newFact));}
    useEffect(refreshFact,[])
    return {fact,refreshFact}  
}