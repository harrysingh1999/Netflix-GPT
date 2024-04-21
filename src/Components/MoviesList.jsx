import React from "react";
import { img_Url, settings } from "../Utils/constantData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MoviesList({ nowPlayingMovies, title }) {
  return (
    <>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <Slider {...settings}>
        {nowPlayingMovies &&
          nowPlayingMovies.slice(1).map((movie) => {
            return (
              <div key={crypto.randomUUID()} className="m-1">
                <img
                  src={`${img_Url}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-[180px]"
                />
              </div>
            );
          })}
      </Slider>
    </>
  );
}
