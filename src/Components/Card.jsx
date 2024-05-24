import React from "react";
import { img_Url } from "../Utils/constantData";
import { useNavigate } from "react-router-dom";

export default function Card({ movies, title }) {
  console.log(movies);
  const navigate = useNavigate();
  const handlefilteredMovieClick = (movieId) => {
    navigate("/MovieDetails", { state: movieId });
  };
  return (
    // <div
    //   className={` ${
    //     title !== "Similar Movies" ? "flex flex-wrap justify-center" : "flex"
    //   }  `}
    // >
    <>
      {movies
        ?.filter(
          (movie) => movie?.vote_average >= 6 && movie?.poster_path !== null
        )
        .map((filteredMovie) => {
          // console.log(filteredMovie);
          return (
            <div key={crypto.randomUUID()} className="pe-4 text-sm w-52">
              <img
                src={`${img_Url}${filteredMovie.poster_path}`}
                alt={filteredMovie.original_title || filteredMovie.title}
                className="rounded-lg mx-auto"
                onClick={() => handlefilteredMovieClick(filteredMovie.id)}
              />

              <div className="px-2 pt-1 pb-3 bg-slate-800 rounded-b-lg">
                <p className="">
                  {filteredMovie.title || filteredMovie.original_title}
                </p>
                <div className="flex justify-between mt-1 text-xs">
                  <p className="border border-white py-0.5 px-1.5 rounded-md">
                    {filteredMovie.release_date?.slice(0, 4)}{" "}
                  </p>
                  <p className="border border-white py-0.5 px-1.5 rounded-md">
                    {" "}
                    {Number.isInteger(filteredMovie.vote_average)
                      ? filteredMovie.vote_average
                      : filteredMovie.vote_average?.toFixed(1)}
                    /10
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
