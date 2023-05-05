import React from "react";

const Review = ({ picture, user, message, as }) => {
  return (
    <div>
      <div className="px-25 my-16 max-h-96 w-[460px] rounded-xl border bg-hijau1 shadow-xl">
        <div className="mx-10 my-5 flex flex-row gap-8">
          <div className="h-28 w-28 overflow-hidden rounded-full border border-white bg-white shadow-xl">
            <img
              src={picture}
              className="h-full w-full flex-col object-cover object-bottom"
            />
          </div>
          <div className="flex-col justify-center pt-7">
            <h1 className="text-3xl font-bold text-white">{user}</h1>
            <h3 className="pt-1 text-lg italic">{as}</h3>
          </div>
        </div>
        <div className="px-10 pb-16">
          <h2>"{message}"</h2>
        </div>
      </div>
    </div>
  );
};

export default Review;
