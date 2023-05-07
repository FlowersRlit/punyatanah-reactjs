import React from "react";
import { NavLink } from "react-router-dom";

const PunyaTanah = ({ redirect, extra }) => {
  return (
    <NavLink
      to={redirect}
      className="group font-bold transition-all duration-200 hover:bg-white">
      <span className="group-hover:text-hijau1">Punyatanah</span>
      <span className="group-hover:text-orange1">
        .com
        <span className="font-medium group-hover:italic group-hover:text-black">
          {extra}
        </span>
      </span>
    </NavLink>
  );
};

export default PunyaTanah;
