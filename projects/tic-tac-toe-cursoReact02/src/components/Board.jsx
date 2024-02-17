import { Square } from "./Square"
export function Board({newBoard,updateBoard}){
    return(
    newBoard.map((square,index)=>{
     return(
         <Square key={index} 
                 index={index}
                 updateBoard={updateBoard}>
         {square}
         </Square>

     )
    })
    )
 }