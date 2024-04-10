import { useEffect } from "react";
import { API_Options } from "../Utils/constantData";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/movieSlice";

export const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTrailerVideo = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_Options
      );
      const json = await response.json();

      const trailerVideos = json.results.filter(
        (video) => video.name === "Official Trailer"
      );
      const trailerVideo = trailerVideos ? trailerVideos[0] : json.results[0];
      dispatch(addTrailerVideo(trailerVideo));
    };
    fetchTrailerVideo();
  }, []);
};
