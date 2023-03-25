import React, { useState } from "react";

export function SideRowData({ judul, gambar, id }) {
  return (
    <div className="card relative w-full overflow-hidden bg-base-100 shadow-xl">
      <figure>
        <img src={gambar} alt="tanah" className="h-full w-full object-cover" />
      </figure>
      <div className="absolute bottom-0  left-0 w-full">
        <button className="h-full w-full bg-hijau1 py-4 pl-4 text-start font-semibold text-white transition-all duration-300 ease-in-out hover:text-[#FF6500]">
          {judul}
        </button>
      </div>
    </div>
  );
}

export default SideRowData;
