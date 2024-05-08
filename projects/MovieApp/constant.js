export const URL_LIST_MOVIE='movie/popular?language=es-ES&page=1';
export const URL_PREFIX_ENDPOINT='https://api.themoviedb.org/3/';
export const URL_IMAGE_PREFIX='https://image.tmdb.org/t/p/';
export const URL_IMAGE_POSTER_SIZE_PREFIX='w220_and_h330_bestv2';
export const URL_IAMGE_BACKDROP_SIZE_PREFIX='w1920_and_h600_multi_faces';
export const URL_VIDEO_PREFIX=(movie_id)=>{
  return `/movie/${movie_id}/videos`
};

export const URL_SEARCH_QUERY=(query)=>{
  return `search/movie?query=${query}&include_adult=false&language=es-ES&page=1`
}
export const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmFkZTNkODk2YTI1YjEzMzg5NTllZGNhZDU3ZDBlYyIsInN1YiI6IjY1ODAwM2ZmODc1ZDFhMDY0M2FlNWIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qADY4gRpYa6S5JPPf0kc96Txobkbf6egOvvL9hTb7-Q'
  }
};

