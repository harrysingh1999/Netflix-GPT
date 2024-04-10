import React from "react";
import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies";
import TrailerMovieContainer from "./TrailerMovieContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";

export default function Browse() {
  useNowPlayingMovies();
  return (
    <div>
      <TrailerMovieContainer />
      <SecondaryMovieContainer />
    </div>
  );
}
