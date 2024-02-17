export function saveGameStorage({board,turn}){
    window.localStorage.setItem('board',board);
    window.localStorage.setItem('turn',turn);
}
export function resetGameStorage(){
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
}