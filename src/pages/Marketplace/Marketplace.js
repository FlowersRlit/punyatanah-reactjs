import React, { useState } from "react";
import CardMarketplace from "../../components/MarketComponents/CardMarketplace";
import FilterMarketplace from "../../components/MarketComponents/FilterMarketplace";
import Data from "../../data";

export default function Marketplace() {
  const [data, setData] = useState(Data);
  const [currPage, setCurrPage] = useState(1);

  return (
    <div className="w-full bg-white px-5 py-10 xl:px-20">
      <h4 className="text-md  mb-2 text-gray1">Home / Jabodetabek</h4>
      <h1 className="mb-4 text-xl font-semibold text-neutral-800 md:text-4xl">
        Tanah Murah Di Jabodetabek
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <FilterMarketplace />
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2">
          {data.Data.map((item, i) => {
            return <CardMarketplace item={item} key={i} />;
          })}
        </div>
      </div>
      <div className="btn-group mt-10 w-full justify-center">
        {new Array(5).fill(1).map((x, i) => {
          console.log(i);
          return (
            <button
              className={`btn border-white ${
                currPage === i + 1 ? "bg-hijau1" : "bg-gray1"
              }`}
              key={i}>
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
