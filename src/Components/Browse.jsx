import React from "react";
import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies";
import TrailerMovieContainer from "./TrailerMovieContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";
import { useTopRatedMovies } from "../customHooks/useTopRatedMovies";

export default function Browse() {
  useNowPlayingMovies();
  useTopRatedMovies();
  return (
    <div className="w-[100vw] max-w-[100vw]">
      <TrailerMovieContainer />
      <SecondaryMovieContainer />
    </div>
  );
}
