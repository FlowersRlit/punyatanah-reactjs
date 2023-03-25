import React from "react";
import { NavLink } from "react-router-dom";

const FooterSvgFill = ({ Icon, Link }) => {
  return (
    <NavLink to={Link} className="mr-6 text-orange1">
      {Icon}
    </NavLink>
  );
};

export default FooterSvgFill;
