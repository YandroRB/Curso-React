import { useEffect, useState } from "react"
import './App.css'
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

export function App(){
  const {fact,refreshFact}=useCatFact();
  const {url,imgFact}=useCatImage({fact});
  const handleClick=  ()=>{
    refreshFact();
  }
  return(
    <main>
      <h1>Cat Fact</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact&& <p>{fact}</p>}
      {imgFact && <img src={url} alt="Imagen generada a partir de un hecho aleatorio"/>}
    </main>
  )
}