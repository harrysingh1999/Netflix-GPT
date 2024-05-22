import React from "react";
import { useTrailerVideo } from "../customHooks/useTrailerVideo";
import { useSelector } from "react-redux";

export default function Iframe({ movieId, css, title }) {
  useTrailerVideo(movieId);
  const storeTrailerVideo = useSelector((store) => store.movie?.trailerVideo);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-white relative">{title}</h1>
      <iframe
        className={`${css} rounded-2xl`}
        src={`https://www.youtube.com/embed/${storeTrailerVideo?.key}?&autoplay=1&mute=1&loop=1&playlist=${storeTrailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
