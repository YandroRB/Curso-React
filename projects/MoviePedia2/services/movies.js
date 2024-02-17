export async function searchMovies({search}){

    if(search==='') return null
    
    const response = await fetch(`https://omdbapi.com/?s=${search}&type=movie&apikey=e3cf5423`);
    if(!response.ok) throw new Error('Hubo un error al encontrar los datos: '+ response.status);
    const {Search} = await response.json();
    const localMoviesData = Search?.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        type: movie.Type,
        year: movie.Year,
      }))
    return localMoviesData

}