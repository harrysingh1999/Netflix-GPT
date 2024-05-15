import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { API_Options, img_Url } from "../Utils/constantData";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../Utils/movieSlice";

export default function MovieDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const movieDetails = useSelector((store) => store.movie.movieDetails);
  let routedMovieId = location.state;

  const getUSCommaFormat = (input) => {
    let dataStr = "";
    let count = 0;
    let reversedDataStr = "";
    for (let i = input.length - 1; i >= 0; i--) {
      if (count === 3) {
        dataStr += "," + input[i];
        count = 0;
      } else {
        dataStr += input[i];
      }
      count++;
    }
    reversedDataStr = [...dataStr].reverse();
    return reversedDataStr;
  };

  useEffect(() => {
    const getMovieDetails = async (movieId) => {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_Options
      );
      let parsedJSON = await response.json();
      console.log(parsedJSON);
      dispatch(addMovieDetails(parsedJSON));
    };
    getMovieDetails(routedMovieId);
  }, [routedMovieId]);

  return (
    <>
      {movieDetails && (
        <div className="grid grid-flow-col gap-20 mx-8">
          <div className="col-span-3">
            <img
              src={img_Url + movieDetails.poster_path}
              alt={movieDetails.original_title}
            />
          </div>

          <div className="col-span-9">
            <h1 className="text-4xl font-semibold">
              {movieDetails.original_title}
            </h1>
            <p className="my-3">{movieDetails.overview}</p>
            <div className="flex justify-between w-[40%]">
              <div className="font-semibold">
                <p>IMDB:</p>
                <p>Genres:</p>
                <p>Release Date:</p>
                <p>Duration:</p>
                <p>Budget:</p>
                <p>Revenue:</p>
                <p>Spoken Languages:</p>
                <p>Production Countries:</p>
              </div>
              <div>
                <p>{movieDetails.vote_average.toFixed(1)}</p>
                <p>
                  {movieDetails.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p>{movieDetails.release_date}</p>
                <p>{movieDetails.runtime} minutes</p>
                <p>USD {getUSCommaFormat(movieDetails.budget.toString())}</p>
                <p>USD {getUSCommaFormat(movieDetails.revenue.toString())}</p>
                <p>
                  {" "}
                  {movieDetails.spoken_languages
                    .map((origin) => origin.name)
                    .join(", ")}
                </p>
                <p>
                  {" "}
                  {movieDetails.production_countries
                    .map((country) => country.name)
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
