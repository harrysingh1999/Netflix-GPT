import { useEffect } from "react";
import { API_Options } from "../Utils/constantData";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_Options
    );
    const json = await response.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
};
