export const API_Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};

export let img_Url = "https://image.tmdb.org/t/p/w500";

export const settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 1500,
  slidesToShow: 9,
  slidesToScroll: 8,
};

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
