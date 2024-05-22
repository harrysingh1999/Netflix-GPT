import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { API_Options, getUSCommaFormat, img_Url } from "../Utils/constantData";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../Utils/movieSlice";
import MovieCredits from "./MovieCredits";
import Error from "./Error";
import IMDB_logo from "./Images/IMDB_logo.png";
import Iframe from "./Iframe";
import MoviesList from "./MoviesList";

export default function MovieDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { movieDetails, movieCredits, similarMovies } = useSelector(
    (store) => store.movie
  );
  let routedMovieId = location.state;

  useEffect(() => {
    const getMovieDetails = async (movieId) => {
      let movieResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_Options
      );
      let creditResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
        API_Options
      );
      let similarMovieResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
        API_Options
      );
      let parsedMovieJSON = await movieResponse.json();
      let parsedCreditJSON = await creditResponse.json();
      let similarMovieJSON = await similarMovieResponse.json();

      dispatch(
        addMovieDetails({
          movieDetails: parsedMovieJSON,
          movieCredits: parsedCreditJSON,
          similarMovies: similarMovieJSON,
        })
      );
    };
    getMovieDetails(routedMovieId);
  }, [routedMovieId]);

  return (
    <div className="text-white bg-black">
      {movieDetails?.id ? (
        <>
          <img
            src={img_Url + movieDetails.backdrop_path}
            alt=""
            className="absolute brightness-[0.25]"
          />
          <div className="flex mx-8 pt-20 justify-center ">
            <div className="col-span-3 relative">
              <img
                src={img_Url + movieDetails.poster_path}
                alt={movieDetails.original_title}
                className="rounded-lg w-80"
              />
            </div>

            <div className="col-span-8 relative ms-16 w-[60%]">
              <h1 className="text-4xl font-semibold">
                {movieDetails.original_title}
              </h1>
              <p className="my-3">{movieDetails.overview}</p>
              <p>
                {movieDetails.genres.map((genre) => (
                  <span
                    key={genre.name}
                    className="border border-white px-2 py-1 me-2 rounded-md text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </p>
              <div className="flex mt-4 items-center">
                <img src={IMDB_logo} alt="IMDB" className="w-14 rounded-md " />{" "}
                <p className="text-lg font-semibold ms-2">
                  {Number.isInteger(movieDetails.vote_average)
                    ? movieDetails.vote_average
                    : movieDetails.vote_average.toFixed(1)}
                </p>
              </div>
              <div className="flex justify-between w-[50%] mt-8">
                <div className="font-semibold">
                  <p>Release Date:</p>
                  <p>Duration:</p>
                  <p>Budget:</p>
                  <p>Revenue:</p>
                  <p>Spoken Languages:</p>
                  <p>Production Countries:</p>
                </div>
                <div className="">
                  <p>{movieDetails.release_date}</p>
                  <p>{movieDetails.runtime} minutes</p>
                  <p>USD {getUSCommaFormat(movieDetails.budget?.toString())}</p>
                  <p>
                    USD {getUSCommaFormat(movieDetails.revenue?.toString())}
                  </p>
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
          <Iframe
            movieId={routedMovieId}
            css="aspect-video relative w-[40%]"
            title="Trailer"
          />
        </>
      ) : (
        <Error />
      )}
      {movieDetails?.id && (
        <MovieCredits movieCredits={movieCredits?.cast} title={"Cast"} />
      )}
      {movieDetails?.id && (
        <MovieCredits movieCredits={movieCredits?.crew} title={"Crew"} />
      )}
      {movieDetails?.id && (
        <MoviesList movies={similarMovies.results} title="Similar Movies" />
      )}
    </div>
  );
}
