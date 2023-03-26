import React from "react";
import { NavLink } from "react-router-dom";

const NavbarMobileButtons = ({ Title, Page }) => {
  return (
    <NavLink
      to={Page}
      className="block py-2 px-4 text-base font-medium text-[#016450] hover:bg-gray-200">
      {Title}
    </NavLink>
  );
};

export default NavbarMobileButtons;
