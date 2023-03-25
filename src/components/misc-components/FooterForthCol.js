import React from "react";

const FooterForthCol = ({ Caption, Icon }) => {
  return (
    <p className="mb-4 flex items-center justify-center gap-3 md:justify-start">
      {Icon}
      {Caption}
    </p>
  );
};

export default FooterForthCol;
