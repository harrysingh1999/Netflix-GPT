import React from "react";
import { img_Url, similar_Carousel } from "../Utils/constantData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Slider from "react-slick";

export default function MoviesList({ movies, title, btnText1, btnText2 }) {
  return (
    <div className="md:mx-40 ">
      <div className="flex">
        <h1 className="text-3xl font-semibold py-4">{title}</h1>
        <button>{btnText1}</button>
        <button>{btnText2}</button>
      </div>
      <Slider {...similar_Carousel}>
        console.log(
 );
      </Slider>
    </div>
  );
}
