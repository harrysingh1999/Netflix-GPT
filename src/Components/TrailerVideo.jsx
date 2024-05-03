import React from "react";
import { useSelector } from "react-redux";
import { useTrailerVideo } from "../customHooks/useTrailerVideo";

export default function TrailerVideo({ movieId }) {
  const storeTrailerVideo = useSelector((store) => store.movie?.trailerVideo);
  useTrailerVideo(movieId);

  return (
    <div className="w-[100vw] max-w-[100vw]">
      <iframe
        className="w-[100vw] max-w-[100vw] aspect-video"
        src={`https://www.youtube.com/embed/${storeTrailerVideo?.key}?&autoplay=1&loop=1&mute=1&playlist=${storeTrailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
