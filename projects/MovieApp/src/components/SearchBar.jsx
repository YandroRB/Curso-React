
export function SearchBar({search}){
    const handleChange=(event)=>{
        search(event.target.value);
    }
    return(
        <input className="search-bar" type="text" onChange={handleChange} placeholder="¿Qué película estás buscando?"/>
    )
}