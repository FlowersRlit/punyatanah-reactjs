import React, { useState } from "react";
import CardMarketplace from "../components/CardMarketplace";
import FilterMarketplace from "../components/FilterMarketplace";
import Data from "../data";

export default function Marketplace(){
  const [data, setData] = useState(Data);
  return (
    <div className="w-full bg-white">
      <h1>Marketplace</h1>
      {
        
        console.log(data)
      }
    
      <div className="flex">
        <FilterMarketplace />
        <div className="grid grid-cols-4">
        {
          data.Data.map((item, i) => {
            return (
              <CardMarketplace item={item} i={i}/>
            )
          })
        }
        </div>
      
      </div>
    </div>
  );
};

