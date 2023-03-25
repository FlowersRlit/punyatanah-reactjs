import React from "react";
import tpakarto from "./../assets/tpakarto.jpg";
import Comendetails from "./childdetails/Comendetails";
import Deksripsit from "./childdetails/Deksripsit";
import Pckategori from "./childdetails/Pckategori";
import Pictdetails from "./childdetails/Pictdetails";
import Ratingdetails from "./childdetails/Ratingdetails";
import Upjdetails from "./childdetails/Upjdetails";
const Detailsi = () => {
  return (
    <>
    <div className="flex container p-2 shadow "> 
    <div className="flex-[3] w-full">
      <div className="pl-8">
          <p className="text-slate-400 text-xl pt-2">
            HOME/banten/tanggerang kota/tanahpakarto
          </p>
          <p className="text-2xl underline underline-offset-2 pb-4 font-bold">TANAH Pak Karto</p>
      </div>
      <div className="pl-8"> 
        <Pictdetails /> 
      </div>
      <div className="pt-4 pl-4">
        <Ratingdetails/>
      </div>
      <div>
        <Deksripsit/>
      </div>
      <div className="pl-8 w-full border-b pb-20">
        <Upjdetails/>
      </div>
      <div>
        <Comendetails/>
      </div>
          
    </div>
        <div className="flex-1 pl-20">
          <Pckategori/>
        </div>
    </div>     
    </>
  );
};

export default Detailsi;
