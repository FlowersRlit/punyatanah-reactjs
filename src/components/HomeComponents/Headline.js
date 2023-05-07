import React from "react";
import LandingPhoto from "../../assets/meadow-2837799_960_720.jpg";

const Headline = () => {
  return (
    <div className="mx-auto mt-20 mb-10">
      {/* grey background */}
      <div className="absolute h-[40rem] w-[100%] flex-auto bg-[#212121]/10 py-4 md:my-2 md:h-[18rem] lg:my-3 lg:h-[22rem] xl:my-6 xl:h-[30rem] 2xl:h-[35rem]"></div>
      <div className="container mx-auto mt-16 flex justify-between">
        {/* unfinished mobile responsive */}
        <div className="container relative my-auto justify-evenly">
          {/* headlne */}
          <h1 className="relative max-w-xl pb-4 font-bold leading-[100px] text-black1 sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Find the perfect place{" "}
            <span className="text-orange1">for you </span>
            and <span className="text-hijau1">your land needs</span>.
          </h1>
          {/* sub-headline */}
          <p className="my-3 text-black1 sm:text-sm lg:text-xl">
            The first ever platform to sell and purchase land in Indonesia!
          </p>

          {/* input form */}
          <div className="flex justify-start">
            <div className="my-4 mb-3 xl:w-96">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className="focus:shadow-te-primary relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l-md border border-solid border-hijau1 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-hijau1/60 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:outline-none"
                  placeholder="Enter a State, County, City, or ID"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />
                <button
                  className="hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800 relative z-[2] flex items-center rounded-r-md bg-hijau1 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="py-auto relative my-auto justify-end">
          <img
            src={LandingPhoto}
            alt="landing"
            className="invisible mr-0 mb-6 rounded-2xl object-cover shadow-xl shadow-gray1 lg:visible"
          />
        </div>
      </div>
    </div>
  );
};

export default Headline;
