import React from "react";
import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies";
import TrailerMovieContainer from "./TrailerMovieContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";
import { usePopularMovies } from "../customHooks/usePopularMovies";

export default function Browse() {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div className="w-full">
      <TrailerMovieContainer />
      <SecondaryMovieContainer />
    </div>
  );
}
