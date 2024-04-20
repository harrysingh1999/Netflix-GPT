import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

export default function SecondaryMovieContainer() {
  const storeMovies = useSelector((store) => store.movie);

  console.log(storeMovies);

  return (
    <>
      <MoviesList
        nowPlayingMovies={storeMovies.nowPlayingMovies}
        title="Now Playing"
      />
      <MoviesList
        nowPlayingMovies={storeMovies.popularMovies}
        title="Popular Movies"
      />
    </>
  );
}
