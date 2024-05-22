import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
    AI_Movies: null,
    AI_Movies_Names: null,
    movieDetails: null,
    movieCredits: null,
    similarMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addAI_Movies: (state, action) => {
      const { AI_Movies, AI_Movies_Names } = action.payload;
      state.AI_Movies = AI_Movies;
      state.AI_Movies_Names = AI_Movies_Names;
    },
    addMovieDetails: (state, action) => {
      const { movieDetails, movieCredits, similarMovies } = action.payload;
      state.movieDetails = movieDetails;
      state.movieCredits = movieCredits;
      state.similarMovies = similarMovies;
    },
    addMovieCredits: (state, action) => {
      state.movieCredits = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTopRatedMovies,
  addTrailerVideo,
  addAI_Movies,
  addMovieDetails,
} = movieSlice.actions;
export default movieSlice.reducer;
