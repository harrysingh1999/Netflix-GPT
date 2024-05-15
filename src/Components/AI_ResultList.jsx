import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

export default function () {
  const { AI_Movies, AI_Movies_Names } = useSelector((store) => store.movie);
  return (
    <div>
      {AI_Movies_Names &&
        AI_Movies_Names.map((movieName, index) => (
          <MoviesList
            movies={AI_Movies[index]}
            title={movieName}
            key={movieName}
          />
        ))}
    </div>
  );
}
