import React from "react";
import comentar from "./../../assets/comentar.png";
const Comment = () => {
  return (
    <div className="flex w-full items-center rounded-lg p-12">
      <img src={comentar} className="h-16 w-16 rounded-lg" />

      <h1 className="w-full p-8 font-semibold">
        komentar
        <p>
          <input
            type="text"
            className=" h-8 w-full rounded-lg bg-gray-200 pl-4 text-start"
            placeholder="Tuliskan Pengalam anda disini..."></input>
        </p>
      </h1>
    </div>
  );
};

export default Comment;
