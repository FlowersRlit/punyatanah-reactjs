import React from "react";
import { NavLink } from "react-router-dom";

const NavbarMidButtons = ({ Button, Page }) => {
  return (
    <NavLink
      to={Page}
      className="group py-4 px-2 text-[#212121] transition-all duration-300 ease-in-out hover:text-[#FF6500]">
      <span className="bg-gradient-to-r from-orange1 to-orange1 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
        {Button}
      </span>
    </NavLink>
  );
};

export default NavbarMidButtons;
