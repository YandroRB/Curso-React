import { URL_IMAGE_POSTER_SIZE_PREFIX, URL_IMAGE_PREFIX } from "../../constant";

export function MovieList ({movieList,isSelectMovie}){
    return(
        <>
        {movieList && movieList.map((movie)=>{
            const {title,poster_path,id}=movie;
            if(poster_path){
            return (
            <section className="movie" onClick={()=>{isSelectMovie(movie)}} key={id}>
                <img className="movie-poster" src={URL_IMAGE_PREFIX+URL_IMAGE_POSTER_SIZE_PREFIX+poster_path} alt="poster extract to the movie db"/>
                <p className="movie-title">{title}</p>
            </section>
            )
            }
        })}
        </>
    )
}