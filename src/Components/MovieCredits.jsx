import React from "react";
import { credits_Carousel, img_Url, settings } from "../Utils/constantData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MovieCredits({ movieCredits, title }) {
  const movie = movieCredits?.filter((data) => data.profile_path !== null);
  return (
    <>
      {movieCredits && (
        <div className="pb-4 pt-8 md:mx-40">
          <h1 className="font-semibold text-2xl ms-12 my-4">{title}</h1>
          <Slider {...credits_Carousel}>
            {movie.slice(0, 12).map((data) => {
              return (
                <div key={data.character}>
                  <img
                    src={img_Url + data.profile_path}
                    alt={data.name}
                    className="rounded-full object-cover w-36 h-36 mx-auto"
                  />
                  <div className="text-center">
                    <p className="font-medium">{data.name}</p>
                    <p className="text-xs">
                      {" "}
                      {(data.character && "as " + data.character) ||
                        (data.job && data.job)}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      )}
    </>
  );
}
