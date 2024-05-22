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
      // console.log(json);

      const trailerVideos = json.results?.filter(
        (video) =>
          video.name === "Trailer" ||
          video.name === "Official Trailer" ||
          video.name === "Official Trailer [Subtitled]"
      );

      const trailerVideo =
        trailerVideos.length !== 0 ? trailerVideos[0] : json.results[0];

      dispatch(addTrailerVideo(trailerVideo));
    };
    fetchTrailerVideo();
  }, []);
};
