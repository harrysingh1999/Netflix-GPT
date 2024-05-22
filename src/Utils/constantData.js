export const API_Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};

export let img_Url = "https://image.tmdb.org/t/p/original";

export const credits_Carousel = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 1500,
  slidesToShow: 8,
  slidesToScroll: 8,
};

export const similar_Carousel = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 1500,
  slidesToShow: 7,
  slidesToScroll: 7,
};

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const aifakeData =
  "Shooter, Wrath of Man, Non-stop, Jack Reacher, flight, genius, The Mechanic";

export const getUSCommaFormat = (input) => {
  let dataStr = "";
  let count = 0;
  let reversedDataStr = "";
  for (let i = input.length - 1; i >= 0; i--) {
    if (count === 3) {
      dataStr += "," + input[i];
      count = 0;
    } else {
      dataStr += input[i];
    }
    count++;
  }
  reversedDataStr = [...dataStr].reverse();
  return reversedDataStr;
};
