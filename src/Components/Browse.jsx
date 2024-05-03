import React from "react";
import { useNowPlayingMovies } from "../customHooks/useNowPlayingMovies";
import TrailerMovieContainer from "./TrailerMovieContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";
import { useTopRatedMovies } from "../customHooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import AI_Search from "./AI_Search";

export default function Browse() {
  const storeAI_Search = useSelector((store) => store.search.AI_Search);

  useNowPlayingMovies();
  useTopRatedMovies();
  return (
    <div className="w-[100vw] max-w-[100vw]">
      {!storeAI_Search ? (
        <>
          <TrailerMovieContainer />
          <SecondaryMovieContainer />
        </>
      ) : (
        <AI_Search />
      )}
    </div>
  );
}
