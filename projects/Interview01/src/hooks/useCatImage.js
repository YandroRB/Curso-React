import { useEffect,useState } from "react";


const GET_URL_CAT_IMG=(firstThreeWords)=>{
    return `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red&json=true`;
  }
const GET_URL_CAT_IMG_TEMPLATE= (_ID,firstThreeWords)=>{
    return `https://cataas.com/cat/${_ID}/says/${firstThreeWords}?fontSize=50&fontColor=blue`;
};
export function useCatImage({fact}){
    const [imgFact,setImgFact]=useState();
    const [threeWords,setThreeWords]=useState();
    
    useEffect(()=>{
      if(!fact) return
      const firstThreeWords=fact.split(' ',3).join(' ');
      setThreeWords(firstThreeWords);
      const fetchData = async () =>{
        try {
          const URL=GET_URL_CAT_IMG(firstThreeWords);
          const response= await fetch(URL);
          if(response.ok){
            const data= await response.json();
            setImgFact(data._id);
          }
          
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    },[fact])
    return {url:GET_URL_CAT_IMG_TEMPLATE(imgFact,threeWords),imgFact};
  
  }