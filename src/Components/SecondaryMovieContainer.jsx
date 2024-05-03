import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

export default function SecondaryMovieContainer() {
  const storeMovies = useSelector((store) => store.movie);

  return (
    <>
      <div className="bg-black/[0.3] max-w-[100vw] px-8">
        <MoviesList
          movies={storeMovies.nowPlayingMovies}
          title="Trending Movies & TV shows"
        />
        <MoviesList
          movies={storeMovies.topRatedMovies}
          title="Top Rated Movies"
        />
      </div>
    </>
  );
}
