import React from "react";
import { NavLink } from "react-router-dom";
import MarketplaceCards from "./MarketplaceCards";
import Background1 from "../../assets/ankara-4940331_960_720.jpg";
import Background2 from "../../assets/montana-4660393_960_720.jpg";
import Background3 from "../../assets/land-5312379_960_720.jpg";

const MarketplacePreview = () => {
  return (
    <div className="my-40">
      <div className="container my-40 mx-auto flex">
        <div className="my-auto justify-between">
          <h2 className="relative max-w-lg pb-4 font-bold text-black1 sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            {/* tagline */}
            Explore <span className="text-hijau1">of Thousands</span>.
          </h2>
          {/* sub-tagline */}
          <NavLink
            to="./marketplace"
            className="my-3 mr-5 rounded-md border-2 border-hijau1 py-3 px-6 font-medium text-hijau1 transition-all duration-200 hover:scale-105">
            Browse The Marketplace
          </NavLink>
        </div>

        {/* cards */}
        <div>
          {/* 1 */}
          <MarketplaceCards
            Background={Background1}
            Size="600"
            Location="Padang, Sumatra Utara"
            Price="1.200.000,00"
            Owner="Anton Indrayanto"
          />

          {/* 2 */}
          <MarketplaceCards
            Background={Background2}
            Size="1000"
            Location="Jatinangor, Sumedang"
            Price="2.300.000"
            Owner="Yoyo Nugroho"
          />

          {/* 3 */}
          <MarketplaceCards
            Background={Background3}
            Size="680"
            Location="Cikarang Utara, Bekasi"
            Price="900.000"
            Owner="Udin Jayanuddin"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketplacePreview;
