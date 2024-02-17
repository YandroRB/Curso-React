import { useCallback, useEffect, useRef, useState } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import debounce from 'just-debounce-it'

function useSearch (){
  const [query,setQuery] = useState('');
  const [error,setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(()=>{
    if(isFirstInput.current){
      isFirstInput.current=query ==='';
      return
    }
    if(query===''){
      setError('No se puede hacer una busquedad vacia')
      return
    }
    if(query.match(/^\d+$/)){
      setError('No se puede hacer una busquedad con numeros')
      return
    }
    if(query.length< 3){
      setError('La cadena es demasiado corta para hacer una busquedad')
      return
    }
  
    setError(null);
  },[query])
  return {query,setQuery,error}
}

function App() {
  const [sort,setSort]=useState(false)
  const {query,setQuery,error}= useSearch()
  const { movies,getMovies,loading,movieError } = useMovies({search:query,sort});

  const debounceMovie = useCallback(
    debounce(search =>{
      getMovies({search})
    },300)
    ,[getMovies])

  const handleSubmit=(event)=>{
    event.preventDefault();
    getMovies({search:query});
    
  }
  
  const handleChange=(event)=>{
    const newQuery=event.target.value;
    if(newQuery.startsWith(' ')) return
    setQuery(newQuery);
    debounceMovie(newQuery);
  }
  const handleCheck= ()=>{
    setSort(!sort);
  }
  
  return (
    <>
      <header>
        <form className="form-search" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={query}
            placeholder="Star Wars, Spider-man, Thor love and tunder,etc..."
          />
          <input type="checkbox" onChange={handleCheck} name="isSort" checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error&&<p style={{color:'red'}}>{error}</p>}
      </header>
      <main>
        {loading?<p>Cargando.....</p>:<Movies movies={movies} />}
      </main>
    </>
  );
}

export default App;
