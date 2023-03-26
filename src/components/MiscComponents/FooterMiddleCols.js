import React from "react";
import { NavLink } from "react-router-dom";

const FooterSecondCol = ({ Title, Page }) => {
  return (
    <p className="mb-4">
      <NavLink to={Page} className="text-hijau1 hover:underline">
        {Title}
      </NavLink>
    </p>
  );
};

export default FooterSecondCol;
