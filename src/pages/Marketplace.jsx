import React, { useState } from "react";
import CardMarketplace from "../components/CardMarketplace";
import Data from "../data";

export default function Marketplace(){
  const [data, setData] = useState(Data);
  return (
    <div className="w-full">
      <h1>Marketplace</h1>
      {
        
        console.log(data)
      }
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
  );
};

