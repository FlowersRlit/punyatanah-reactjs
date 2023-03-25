import React from "react";
import { NavLink } from "react-router-dom";
import { SiGooglechat } from "react-icons/si";

const MarketplaceCards = ({ Background, Size, Location, Owner, Price }) => {
  return (
    <div
      id="card-container"
      className="flex flex-col flex-wrap transition duration-200 hover:scale-105 sm:flex-row md:flex-col">
      <div className="w-full p-2 hover:cursor-pointer sm:w-1/2 md:min-w-full">
        <div className="shad relative flex flex-row content-center justify-between overflow-hidden rounded-lg border text-black1 shadow-lg shadow-gray1 sm:flex-col md:flex-row xl:max-h-48">
          <img
            className="sm:h-54 w-2/5 object-cover sm:w-full sm:object-contain md:min-h-full md:w-2/5 md:object-cover"
            src={Background}
            alt="card-background-preview"
          />
          <div className="min-w-md flex w-3/5 flex-col justify-between sm:w-full md:w-3/5">
            <div className="p-4">
              <h4 className="text-lg font-semibold text-orange1 sm:text-xl">
                {Size} m²
              </h4>
              <h4 className="text-lg font-medium sm:text-xl">Rp {Price}</h4>
              <h4 className="font-base text-sm text-gray1 sm:text-lg">
                {Location}
              </h4>
            </div>
            <div>
              <div className="align-center bottom-0 right-0 flex min-h-fit w-full justify-between bg-hijau1 py-3 px-4">
                <NavLink
                  className="text-sm font-medium text-white sm:text-base"
                  to="./marketplace">
                  {Owner}
                </NavLink>
                <button type="button">
                  <box-icon name="chat">
                    <SiGooglechat className="fill-white" />
                  </box-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceCards;
