import React from "react";

const FooterColsTitle = ({ Title, Svg }) => {
  return (
    <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
      {Title}
      {Svg}
    </h6>
  );
};

export default FooterColsTitle;
