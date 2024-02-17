import { MovieList } from "./components/movieList.jsx";
import { SearchBar } from "./components/SearchBar.jsx";
import { useMovieApi } from "./hooks/useMovieApi.js";
import { createPortal } from "react-dom";
import { URL_LIST_MOVIE, URL_SEARCH_QUERY } from "../constant.js";
import { useState } from "react";
import { MovieDetails } from "./components/MovieDetails.jsx";
import './App.css'

const overlays=document.getElementById('overlays');

export function MovieApp(){ 
  const {data,renewData} =useMovieApi(URL_LIST_MOVIE);
  const [selectMovie,setSelectMovie]=useState({});
  const [isModalOpen,setIsModalOpen]=useState(false);

  

  const search =(text)=>{
    if(text.trim()==''){
      renewData(URL_LIST_MOVIE);
    }
    else{
      renewData(URL_SEARCH_QUERY(text));
    }
  }

  const changeModalStatus=()=>{setIsModalOpen(!isModalOpen)}

  const isSelectMovie=(movie)=>{
    setSelectMovie(movie);
    changeModalStatus();
  }
  return (
    <>
      <h1 className="title">Movie List</h1>
      <section className="search">
        <SearchBar search={search} />
      </section>
      <article className="container-movies">
        <MovieList movieList={data} isSelectMovie={isSelectMovie}/>
      </article>
      {isModalOpen && createPortal(
         <MovieDetails movie={selectMovie} changeModalStatus={changeModalStatus}/>,
         overlays
      )}
    </>
  )
}