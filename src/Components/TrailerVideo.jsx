import React from "react";
import { useSelector } from "react-redux";
import { useTrailerVideo } from "../customHooks/useTrailerVideo";

export default function TrailerVideo({ movieId }) {
  const storeTrailerVideo = useSelector((store) => store.movie?.trailerVideo);
  useTrailerVideo(movieId);

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${storeTrailerVideo?.key}?&autoplay=1&loop=1&mute=1&playlist=${storeTrailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
