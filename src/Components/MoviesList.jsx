import React from "react";
import { img_Url } from "../Utils/constantData";

export default function MoviesList({ nowPlayingMovies, title }) {
  return (
    <>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <div className="flex flex-wrap mt-6">
        {nowPlayingMovies &&
          nowPlayingMovies.slice(1).map((movie) => {
            return (
              <div key={crypto.randomUUID()} className="m-2">
                <img
                  src={`${img_Url}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-[170px]"
                />
              </div>
            );
          })}
      </div>
    </>
  );
}
