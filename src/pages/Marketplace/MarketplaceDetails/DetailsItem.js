import React, { useEffect, useState } from "react";
import Comment from "../../../components/childdetails/Comment";
import Description from "../../../components/childdetails/Description";
import SideRow from "../../../components/childdetails/SideRow";
import PictureCarousel from "../../../components/childdetails/PictureCarousel";
import Rating from "../../../components/childdetails/Rating";
import OwnerCard from "../../../components/childdetails/OwnerCard";
import SpesifikasiTanah from "../../../components/childdetails/SpesifikasiTanah";
import data from "../../../data";
import { useParams } from "react-router-dom";

const DetailsItem = () => {
  let { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    console.log('id' + id);
  }, [])

  return (
    <>
      <div className="container flex p-2 shadow ">
        <div className="w-full flex-[3] text-black1">
          <div className="pl-8">
            <p className="text-md mb-2 text-gray1 sm:text-base">
              HOME/banten/tanggerang kota/tanahpakarto
            </p>
            <p className="mb-4 text-xl font-semibold sm:text-3xl">
              TANAH Pak Karto
            </p>
          </div>
          <div className="pl-8">
            <PictureCarousel />
          </div>
          <div className="pt-4 pl-4">
            <Rating />
          </div>
          <div>
            <Description />
          </div>
          <div>
            <SpesifikasiTanah />
          </div>
          <div className="w-full border-b pl-8 pb-20">
            <OwnerCard />
          </div>
          <div>
            <Comment />
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
