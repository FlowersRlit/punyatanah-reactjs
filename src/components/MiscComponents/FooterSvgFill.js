import React from "react";
import { NavLink } from "react-router-dom";

const FooterSvgFill = ({ Icon, Redirect }) => {
  return (
    <NavLink
      to={Redirect}
      className="mr-6 text-orange1"
      target="_blank"
      rel="noreferrer">
      {Icon}
    </NavLink>
  );
};

export default FooterSvgFill;
