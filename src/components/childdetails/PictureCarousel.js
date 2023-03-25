import React from "react";
import tpakarto from "./../../assets/tpakarto.jpg";

const PictureCarousel = () => {
  return (
    <>
      <div className="h-3/2 carousel w-full rounded-2xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={tpakarto} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn-circle btn">
              ❮
            </a>
            <a href="#slide2" className="btn-circle btn">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={tpakarto} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn-circle btn">
              ❮
            </a>
            <a href="#slide3" className="btn-circle btn">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={tpakarto} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn-circle btn">
              ❮
            </a>
            <a href="#slide4" className="btn-circle btn">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={tpakarto} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn-circle btn">
              ❮
            </a>
            <a href="#slide1" className="btn-circle btn">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PictureCarousel;
