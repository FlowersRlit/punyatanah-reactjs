import React from "react";
import SideRowData from "./SideRowData";
import datac from "./Cdata.json";
const SideRow = () => {
  return (
    <div className="mt-20 flex flex-col gap-5">
      {datac.map((v, i) => (
        <SideRowData key={i} judul={v.judul} gambar={v.gambar} id={v.id} />
      ))}
    </div>
  );
};

export default SideRow;
