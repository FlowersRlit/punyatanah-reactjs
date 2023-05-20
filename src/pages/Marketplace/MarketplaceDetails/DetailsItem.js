import React, { useEffect, useState } from "react";
import Description from "../../../components/childdetails/Description";
import SideRow from "../../../components/childdetails/SideRow";
import PictureCarousel from "../../../components/childdetails/PictureCarousel";
import Rating from "../../../components/childdetails/Rating";
import OwnerCard from "../../../components/childdetails/OwnerCard";
import SpesefikasiTanah from "../../../components/childdetails/SpesifikasiTanah";
import data from "../../../data";
import { useParams } from "react-router-dom";

const DetailsItem = () => {
  let { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    console.log("id" + id);
  }, []);

  return (
    <>
      <div className="container flex py-20">
        <div className="w-full flex-[3] text-black1">
          <div className="pl-8">
            <p className="text-md mb-2 text-gray1 sm:text-base">
              Home / Banten / Tanggerang Kota / Tanah Pak Karto 1 Hektar Medan
            </p>
            <p className="mb-6 text-xl font-bold sm:text-4xl">Karto's Land</p>
          </div>
          <div className="pl-8">
            <PictureCarousel />
          </div>
          <div className="pt-4 pl-4">
            <Rating />
          </div>
          <div className="py-2">
            <Description />
          </div>
          <div className="py-2">
            <SpesefikasiTanah />
          </div>
          <div className="w-full border-b py-2 pl-8">
            <OwnerCard />
          </div>
        </div>
        <div className="flex-1 pl-20">
          <SideRow />
        </div>
      </div>
    </>
  );
};

export default DetailsItem;
