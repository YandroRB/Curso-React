import { useCallback, useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movieError, setMovieError] = useState(null);
  const previusSearch = useRef(search);

  const getMovies = useCallback( async ({search}) => {
    if (previusSearch.current === search) return;
    try {
      setLoading(true);
      setMovieError(null);
      previusSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setMovieError(error.message);
    } finally {
      setLoading(false);
    }
  },[]);
  
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  },[sort,movies]);

  return { movies: sortedMovies, getMovies, movieError, loading };
}
