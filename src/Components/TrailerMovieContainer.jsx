import React from "react";
import { useSelector } from "react-redux";
import TrailerVideo from "./TrailerVideo";

export default function TrailerMovieContainer() {
  const storeMovie = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!storeMovie) return;

  const trailerMovie = storeMovie[0];

  return (
    <>
      <div className="w-screen  bg-gradient-to-r from-black aspect-video text-white pt-[20%] ps-20 absolute">
        <p className="text-3xl font-semibold">{trailerMovie?.original_title}</p>
        <p className="my-4 w-1/4">{trailerMovie?.overview}</p>
        {/* <div className="flex"> */}
        <button className="border border-gray-400 px-6 py-2 rounded-md me-4 ">
          ▶️ Play
        </button>
        <button className="border border-gray-400 px-3 py-2 rounded-md ">
          ℹ️ More Info
        </button>
        {/* </div> */}
      </div>
      <TrailerVideo movieId={trailerMovie?.id} />
    </>
  );
}
