import { useState } from "react";
import confetti from 'canvas-confetti'
import { Square } from "./components/Square";
import {TURNS } from "./constant";
import {checkEndGame,checkWinner} from "./logic/board"
import { WinnerModal } from "./components/WinnerModal";
import { Board } from "./components/Board";
import { random } from "./logic/random";
import { resetGameStorage, saveGameStorage } from "./logic/storage";


function App() {
    const [board,setBoard] = useState(()=>{
        const boardFromStorange=window.localStorage.getItem('board');
        return boardFromStorange?JSON.parse(boardFromStorange):Array(9).fill(null);
    });
    const [turn,setTurn]= useState(()=>{
        const turnFromStorange=window.localStorage.getItem('turn');
        if(turnFromStorange) return turnFromStorange;
        const keys=Object.keys(TURNS),
        comienza=random(0,keys.length-1);
        return TURNS[keys[comienza]];
    });
    const [winner,setWinner]= useState(null);

    const resetGame=()=>{
        setBoard(Array(9).fill(null));
        setTurn(()=>{
            const keys=Object.keys(TURNS),
            comienza=random(0,keys.length-1);
            return TURNS[keys[comienza]];
        });
        setWinner(null);
        resetGameStorage();
    }
    
    const updateBoard=(index)=>{
        if(board[index] || winner) return;
        const newBoard=[...board];
        newBoard[index]=turn;
        setBoard(newBoard);
        const newTurn= turn === TURNS.X?TURNS.O:TURNS.X;
        setTurn(newTurn);
        saveGameStorage({board:JSON.stringify(newBoard),turn:newTurn})
        const newWinner=checkWinner(newBoard);
        if(newWinner){
            confetti();
            setWinner(newWinner);
        }
        else if(checkEndGame(newBoard)) setWinner(false);
    }
    
    return (
        <main className="board">
            <h1>Tic Tac Toe</h1>
            
            <section className={'game'}>
                <Board newBoard={board} updateBoard={updateBoard}/>
            </section>
               
            <section className="turn">
                <Square isSelected={turn === TURNS.X} >{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O} >{TURNS.O}</Square>
            </section>
            <button onClick={resetGame}>Reiniciar</button>
            <WinnerModal resetGame={resetGame} winner={winner} />
        </main>
    )

}

export default App
