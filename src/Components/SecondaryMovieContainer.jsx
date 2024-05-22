import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import Card from "./Card";

export default function SecondaryMovieContainer() {
  const storeMovies = useSelector((store) => store.movie);

  return (
    <>
      <div className="bg-black px-8 text-white ">
        <div className="flex flex-wrap justify-center">
          <Card
            movies={storeMovies.nowPlayingMovies}
            title="Trending"
            btnText1="Movies"
            btnText2="TV Series"
          />
        </div>
        <div className="flex flex-wrap justify-center">
          <Card movies={storeMovies.topRatedMovies} title="Top Rated Movies" />
        </div>
      </div>
    </>
  );
}
