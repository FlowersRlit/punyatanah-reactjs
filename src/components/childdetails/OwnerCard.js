import React from "react";
import upt1 from "./../../assets/upt1.png";
const OwnerCard = () => {
  return (
    <>
      <div className="pb-6 text-2xl font-bold text-hijau1">Penjual Tanah</div>
      <div className="flex w-full items-center rounded-lg bg-hijau1">
        <img src={upt1} className=" h-full px-4" />
        <div className="flex-col items-center pr-14 text-white">
          <h1 className="py-0.5 text-lg">Karto Andoyo </h1>
          <p className="rounded-lg bg-orange1 px-5 text-center">
            Novice Seller
          </p>
        </div>
      </div>
    </>
  );
};

export default OwnerCard;
