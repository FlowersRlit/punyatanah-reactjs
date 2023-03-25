import React, { useState } from "react";
import CardMarketplace from "../components/CardMarketplace";
import FilterMarketplace from "../components/FilterMarketplace";
import Data from "../data";

export default function Marketplace(){
  const [data, setData] = useState(Data);
  const [currPage, setCurrPage] = useState(1);

  return (
    <div className="w-full bg-white px-5 xl:px-20 py-10">
      <h4 className="text-md  text-gray1 mb-2">Home / Jabodetabek</h4>
      <h1 className="text-xl md:text-4xl font-semibold mb-4 text-neutral-800">Tanah Murah Di Jabodetabek</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <FilterMarketplace />
        <div className="grid grid-cols-1 md:grid-cols-2 col-span-3">
        {
          data.Data.map((item, i) => {
            return (
              <CardMarketplace item={item} key={i}/>
            )
          })
        }
        </div>
      </div>
      <div className="btn-group w-full justify-center mt-10">
        {
          new Array(5).fill(1).map((x, i) => {
            console.log(i);
            return (
              <button className={`btn border-white ${currPage === i+1 ? 'bg-hijau1' : 'bg-gray1'}`} key={i}>{i + 1}</button>
            )
          })
        }
      </div>
    </div>
  );
};

