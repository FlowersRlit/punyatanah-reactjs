import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const btn = document.querySelector("button.mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");
  console.log(btn);

  // // add event listeners
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <NavLink to="#" className="flex items-center py-4 px-2">
                <svg
                  className="h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 9999.98 2531.02"
                  shape-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd">
                  <path
                    d="m898.72 523.77 850.8-79.16c6.89-.64 12.49-4.37 15.77-10.43 3.28-6.07 3.28-12.84.02-18.94L1569.15 47.38c-2.78-5.2-7.23-8.66-13.01-10.06-85.09-20.3-173.55-31.96-264.41-34.07-6.37-.14-11.88 2.39-15.93 7.34L881.38 491.14c-5.27 6.37-6.11 14.8-2.22 22.08 3.85 7.3 11.31 11.31 19.53 10.55h.02zm338.71 1058.59-180.56 417.89c-2.5 5.76-2.27 11.73.66 17.26 2.91 5.53 7.67 9.13 13.81 10.32l242.43 48.96c7.75 1.61 15.27-1.23 20.02-7.53l192.41-254.35c6.44-8.54 5.07-20.61-3.11-27.46l-254.43-212.52c-5.01-4.18-11.14-5.64-17.47-4.09-6.37 1.51-11.16 5.52-13.76 11.52zm-562.52 368.88.95.23 270.6 51.8a20.25 20.25 0 0 0 7.56.05l-279.12-52.08zm-70.24 72.86c-.85-.14-1.7-.31-2.5-.5-.14-.05-.29-.07-.47-.09l-359.44-74.41c-8.21-1.68-16.17 1.61-20.75 8.55-4.63 6.96-4.56 15.54.16 22.43a1267.68 1267.68 0 0 0 148.09 177.96c228.41 228.46 544 369.77 892.56 369.77a1284.31 1284.31 0 0 0 55.27-1.21c5.67-.24 10.48-2.55 14.21-6.84 3.71-4.3 5.36-9.35 4.86-15.04l-30.59-328.77c-.8-8.92-7.1-15.94-15.89-17.73l-309.62-63.95c-.09-.02-.24-.05-.33-.05L605 2024.2c-.1-.02-.23-.07-.31-.09l-.02-.02zm-27.97-114.64 31.26-307.97c.56-5.69-1.06-10.79-4.82-15.13L67.84 968.01c-5.03-5.85-12.44-8.19-19.93-6.33-7.48 1.84-12.92 7.36-14.69 14.88-21.7 92.74-33.2 189.43-33.2 288.8 0 204.04 48.42 396.79 134.36 567.36 2.85 5.66 7.63 9.32 13.83 10.62l404.51 83.74c5.78 1.18 11.21 0 15.93-3.49 4.72-3.47 7.46-8.29 8.05-14.14h.02zm48.56-478.37 78.54-774.31c.62-6.4-1.56-12.23-6.26-16.65-4.72-4.39-10.63-6.19-17.02-5.12L129.2 728.26c-6.71 1.13-12.01 5.17-14.87 11.38-13.91 30.38-26.66 61.4-38.22 93.02-2.55 7.01-1.21 14.33 3.68 19.99l510.39 589.52c5.36 6.19 13.41 8.47 21.2 6 7.79-2.46 13.06-8.93 13.9-17.07h-.02zm1267.95-894.31 57.27 828.39c.4 5.67 2.85 10.41 7.2 14.05 4.39 3.59 9.49 5.12 15.16 4.44l533.59-63.89c9.92-1.2 17.35-9.37 17.64-19.34l.49-35.04c0-289.11-97.15-555.48-260.59-768.29-4.27-5.53-10.48-8.33-17.42-7.79l-334.91 26.13c-10.96.87-19.19 10.39-18.42 21.34v.02zm-9.26-104.14 263.52-20.58c7.95-.62 14.42-5.48 17.21-12.94 2.79-7.49 1.08-15.42-4.53-21.11l-5.31-5.33c-120.45-120.49-265.15-216.73-426.15-280.77-7.98-3.17-16.62-1.13-22.34 5.27-5.71 6.38-6.8 15.21-2.74 22.78l161.12 302.12c3.83 7.16 11.1 11.14 19.2 10.55h.02zm607.8 974.22-573.82 68.72c-.16 0-.29.02-.42.07l-1.3.09c-.09.03-.17.03-.29.03l-528.87 43.08c-8.26.68-14.94 5.99-17.45 13.9-2.52 7.91-.09 16.12 6.25 21.41l244.82 204.52c.4.33.76.59 1.16.9l528.19 379.01c8.19 5.86 19.26 4.81 26.18-2.45 180.32-189.25 302.45-434.41 337.77-706.81.82-6.35-1.14-12.13-5.66-16.69-4.44-4.53-10.24-6.56-16.57-5.78zM210.77 628.59l513.39-86.79c4.96-.82 8.93-3.16 12.13-7.04l403.4-491.5c5.26-6.44 6.07-14.97 2.12-22.28-3.97-7.34-11.54-11.29-19.81-10.37-292.53 32.32-554.94 164.65-752.3 362.05-67.97 67.94-128.21 143.61-179.26 225.56-4.3 6.84-4.16 15.08.33 21.75 4.48 6.71 12.02 9.94 19.99 8.59l.02.03zm1870.37 1564.88-460.64-330.54c-8.81-6.35-21.11-4.48-27.65 4.2l-200.77 265.34c-3.14 4.13-4.44 8.78-3.97 13.95l32.6 350.49c.5 5.69 3.09 10.34 7.55 13.88 4.46 3.52 9.61 4.89 15.27 4.08 241.94-34.78 461.71-138.2 638.98-289.89 4.84-4.13 7.27-9.73 6.99-16.1-.26-6.33-3.17-11.69-8.31-15.41h-.03z"
                    fill="#016450"
                  />
                  <path
                    d="m694.77 1583.36-34.47 339.77c-1.44 14.12 8.12 26.86 22.07 29.48l259.12 48.37c12.63 2.38 24.88-4.15 30-15.94l221.56-512.75c6.42-14.87 20.38-24.17 35.46-25.36l-.02-.16 612.4-49.86c14.8-1.21 25.94-14.19 24.93-29.01l-56.42-816c-.5-7.58-3.71-13.91-9.51-18.86-5.78-4.94-12.58-7.08-20.16-6.35l-964.8 89.74c-13.08 1.23-23.23 11.31-24.55 24.37l-95.59 942.58-.02-.02z"
                    fill="#ff6500"
                  />
                  <g fill="#016450">
                    <path
                      d="M4008.05 331.96c0 59.73-13.71 114.31-41.12 163.77-27.43 49.44-69.53 89.34-126.33 119.7s-127.3 45.54-211.51 45.54h-155.7v370.15h-251.17V0h406.87c82.25 0 151.78 14.19 208.58 42.59s99.39 67.57 127.79 117.5c28.4 49.95 42.59 107.23 42.59 171.87zm-398.06 129.25c47.99 0 83.72-11.26 107.23-33.78s35.25-54.35 35.25-95.47c0-41.13-11.74-72.97-35.25-95.49s-59.24-33.78-107.23-33.78h-136.6V461.2h136.6zm1343.26-249.7v819.61h-251.17V919.48c-25.47 36.24-59.97 65.37-103.55 87.4s-91.81 33.05-144.69 33.05c-62.66 0-117.99-13.95-165.97-41.86-47.99-27.91-85.2-68.3-111.64-121.18s-39.66-115.05-39.66-186.55V211.51h249.7v445.06c0 54.84 14.21 97.43 42.61 127.79s66.58 45.54 114.57 45.54c48.96 0 87.64-15.18 116.03-45.54 28.4-30.36 42.61-72.95 42.61-127.79V211.51h251.17zm685.21-8.81c95.97 0 172.6 31.09 229.88 93.27s85.93 147.62 85.93 256.32v478.83h-249.71V586.06c0-54.84-14.19-97.43-42.59-127.79s-66.58-45.54-114.57-45.54-86.17 15.18-114.57 45.54-42.61 72.95-42.61 127.79v445.06h-251.17V211.51h251.17V320.2c25.47-36.22 59.75-64.87 102.82-85.93 43.09-21.04 91.57-31.57 145.41-31.57zm1332.99 8.81-514.1 1208.86h-270.27l188.02-417.16-333.44-791.7h280.56l189.48 512.63 188.01-512.63h271.75zm46.27 408.33c0-84.21 15.91-158.15 47.73-221.78 31.83-63.65 75.15-112.63 129.99-146.89 54.84-34.28 116.04-51.42 183.62-51.42 57.77 0 108.45 11.76 152.02 35.25 43.58 23.51 77.11 54.35 100.6 92.55V211.51h251.19v819.61h-251.19V915.08c-24.48 38.2-58.5 69.05-102.08 92.54-43.58 23.51-94.25 35.25-152.02 35.25-66.58 0-127.3-17.38-182.14-52.13-54.84-34.77-98.16-84.23-129.99-148.36-31.82-64.14-47.73-138.32-47.73-222.53zm613.96 1.47c0-62.68-17.37-112.12-52.13-148.35-34.77-36.24-77.11-54.35-127.06-54.35s-92.29 17.87-127.06 53.61c-34.75 35.74-52.13 84.96-52.13 147.62 0 62.68 17.38 112.37 52.13 149.09 34.77 36.73 77.11 55.08 127.06 55.08s92.29-18.11 127.06-54.35c34.77-36.22 52.13-85.68 52.13-148.35zm-3667.69 866.83v201.22h-273.2v829.9h-251.17v-829.9h-273.2v-201.22H3964zm76.39 619.84c0-84.21 15.91-158.15 47.73-221.78 31.83-63.65 75.15-112.63 129.99-146.89 54.84-34.28 116.04-51.42 183.62-51.42 57.77 0 108.45 11.76 152.02 35.25 43.58 23.51 77.11 54.35 100.6 92.55v-116.04h251.19v819.61h-251.19v-116.04c-24.48 38.2-58.5 69.05-102.08 92.54-43.58 23.51-94.25 35.25-152.02 35.25-66.58 0-127.3-17.38-182.14-52.13-54.84-34.77-98.16-84.23-129.99-148.36-31.82-64.14-47.73-138.32-47.73-222.53zm613.96 1.47c0-62.68-17.37-112.12-52.13-148.35-34.77-36.24-77.11-54.35-127.06-54.35s-92.29 17.87-127.06 53.61c-34.75 35.74-52.13 84.96-52.13 147.62 0 62.68 17.38 112.37 52.13 149.09 34.77 36.73 77.11 55.08 127.06 55.08s92.29-18.11 127.06-54.35c34.77-36.22 52.13-85.68 52.13-148.35zm932.72-418.62c95.97 0 172.6 31.09 229.88 93.27s85.93 147.62 85.93 256.32v478.83h-249.71v-445.06c0-54.84-14.19-97.43-42.59-127.79s-66.58-45.54-114.57-45.54-86.17 15.18-114.57 45.54-42.61 72.95-42.61 127.79v445.06h-251.17v-819.61h251.17v108.69c25.47-36.22 59.75-64.87 102.82-85.93 43.09-21.04 91.57-31.57 145.41-31.57zm440.67 417.14c0-84.21 15.91-158.15 47.73-221.78 31.83-63.65 75.15-112.63 129.99-146.89 54.84-34.28 116.04-51.42 183.62-51.42 57.77 0 108.45 11.76 152.02 35.25 43.58 23.51 77.11 54.35 100.6 92.55v-116.04h251.19v819.61h-251.19v-116.04c-24.48 38.2-58.5 69.05-102.08 92.54-43.58 23.51-94.25 35.25-152.02 35.25-66.58 0-127.3-17.38-182.14-52.13-54.84-34.77-98.16-84.23-129.99-148.36-31.82-64.14-47.73-138.32-47.73-222.53zm613.96 1.47c0-62.68-17.37-112.12-52.13-148.35-34.77-36.24-77.11-54.35-127.06-54.35s-92.29 17.87-127.06 53.61c-34.75 35.74-52.13 84.96-52.13 147.62 0 62.68 17.38 112.37 52.13 149.09 34.77 36.73 77.11 55.08 127.06 55.08s92.29-18.11 127.06-54.35c34.77-36.22 52.13-85.68 52.13-148.35zm937.13-418.62c94.01 0 169.41 31.09 226.21 93.27s85.2 147.62 85.2 256.32v478.83h-249.71v-445.06c0-54.84-14.19-97.43-42.59-127.79s-66.58-45.54-114.57-45.54-86.17 15.18-114.57 45.54-42.61 72.95-42.61 127.79v445.06h-251.17V1432.29h251.17v377.5c25.47-36.24 60.23-65.13 104.3-86.67 44.07-21.53 93.51-32.3 148.35-32.3z"
                      fill-rule="nonzero"
                    />
                    <path d="M2698.3 3.24h186.13v2524.57H2698.3z" />
                  </g>
                  <path
                    d="M9819.37 2075.43c55.17 0 99.06 16.71 131.67 50.14 32.63 33.41 48.94 79.82 48.94 139.22v259.38h-135.27V2283.1c0-28.64-7.55-50.78-22.67-66.43-15.11-15.65-35.93-23.47-62.45-23.47-26.51 0-47.33 7.82-62.45 23.47-15.11 15.65-22.67 37.78-22.67 66.43v241.07h-135.25V2283.1c0-28.64-7.56-50.78-22.67-66.43-15.13-15.65-35.95-23.47-62.45-23.47-26.53 0-47.34 7.82-62.45 23.47-15.13 15.65-22.67 37.78-22.67 66.43v241.07h-136.06v-443.95h136.06v55.69c13.79-18.56 31.82-33.29 54.09-44.15 22.28-10.88 47.48-16.32 75.59-16.32 33.41 0 63.25 7.16 89.5 21.49 26.27 14.31 46.81 34.73 61.67 61.26 15.37-24.39 36.33-44.29 62.85-59.68 26.51-15.37 55.43-23.07 86.71-23.07zm-871.19 455.1c-43.49 0-82.61-9.28-117.34-27.84-34.75-18.56-62.07-45.09-81.95-79.56-19.9-34.49-29.84-74.79-29.84-120.94 0-45.63 10.08-85.81 30.24-120.54 20.16-34.75 47.73-61.4 82.73-79.96 35.01-18.56 74.27-27.84 117.76-27.84s82.73 9.28 117.74 27.84 62.59 45.21 82.75 79.96c20.16 34.73 30.22 74.91 30.22 120.54 0 45.61-10.2 85.79-30.62 120.54-20.42 34.73-48.26 61.4-83.55 79.96-35.27 18.56-74.65 27.84-118.14 27.84zm0-117.76c25.99 0 48.14-9.54 66.43-28.64 18.3-19.08 27.46-46.41 27.46-81.94 0-35.55-8.88-62.85-26.66-81.95-17.76-19.1-39.64-28.64-65.63-28.64-26.53 0-48.54 9.42-66.05 28.24-17.5 18.84-26.25 46.29-26.25 82.35 0 35.53 8.62 62.85 25.85 81.94 17.24 19.1 38.86 28.64 64.85 28.64zm-710.49-110.58c0-46.15 9.42-86.46 28.24-120.94 18.84-34.47 45.09-61 78.76-79.56 33.69-18.56 72.27-27.84 115.77-27.84 55.69 0 102.23 14.57 139.64 43.75 37.39 29.18 61.92 70.28 73.59 123.31h-144.81c-12.2-33.93-35.81-50.92-70.8-50.92-24.93 0-44.83 9.68-59.68 29.04s-22.28 47.08-22.28 83.15 7.43 63.77 22.28 83.13 34.75 29.04 59.68 29.04c34.99 0 58.6-16.97 70.8-50.92h144.81c-11.68 51.98-36.33 92.83-73.99 122.53s-84.07 44.55-139.24 44.55c-43.49 0-82.08-9.28-115.77-27.84-33.67-18.56-59.92-45.09-78.76-79.56-18.82-34.49-28.24-74.79-28.24-120.94zm-133.67 228.34c-23.87 0-43.35-7.03-58.48-21.08-15.11-14.07-22.67-31.44-22.67-52.11 0-21.22 7.56-39 22.67-53.31 15.13-14.33 34.61-21.48 58.48-21.48 23.35 0 42.57 7.15 57.68 21.48 15.13 14.31 22.67 32.09 22.67 53.31 0 20.68-7.55 38.05-22.67 52.11-15.11 14.05-34.33 21.08-57.68 21.08z"
                    fill="#ff6500"
                    fill-rule="nonzero"
                  />
                </svg>
              </NavLink>
            </div>
          </div>

          <div className="hidden items-center space-x-1 font-medium md:flex">
            <NavLink
              to="./index.html"
              className="group py-4 px-2 text-[#212121] transition-all duration-300 ease-in-out hover:text-[#FF6500]">
              <span className="from-orange1 to-orange1 bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                Home
              </span>
            </NavLink>
            <NavLink
              to="./katalog.html"
              className="group py-4 px-2 text-[#212121] transition-all duration-300 ease-in-out hover:text-[#FF6500]">
              <span className="from-orange1 to-orange1 bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                Marketplace
              </span>
            </NavLink>
            <NavLink
              to="#"
              className="group py-4 px-2 text-[#212121] transition-all duration-300 ease-in-out hover:text-[#FF6500]">
              <span className="from-orange1 to-orange1 bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                Review
              </span>
            </NavLink>
            <NavLink
              to="#"
              className="group py-4 px-2 text-[#212121] transition-all duration-300 ease-in-out hover:text-[#FF6500]">
              <span className="from-orange1 to-orange1 bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                About Us
              </span>
            </NavLink>
          </div>

          <div className="hidden items-center space-x-1 md:flex">
            <NavLink
              to="#"
              className="py-2 px-3 font-medium text-[#016450] hover:text-[#FF6500]">
              Sign In
            </NavLink>
            <NavLink
              to="#"
              className="rounded-md border-[#016450] bg-[#016450] py-2 px-3 font-medium text-white hover:bg-[#FF6500] hover:text-white">
              Sign Up
            </NavLink>
          </div>

          <div className="flex items-center md:hidden">
            <button className="mobile-menu-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-[#016450]">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mobile-menu hidden text-center shadow-md shadow-[#016450] md:hidden">
        <NavLink
          to="#"
          className="block py-2 px-4 text-base font-medium text-[#016450] hover:bg-gray-200">
          Home
        </NavLink>
        <NavLink
          to="#"
          className="block py-2 px-4 text-base font-medium text-[#016450] hover:bg-gray-200">
          Marketplace
        </NavLink>
        <NavLink
          to="#"
          className="block py-2 px-4 text-base font-medium text-[#016450] hover:bg-gray-200">
          Review
        </NavLink>
        <NavLink
          to="#"
          className="block py-2 px-4 text-base font-medium text-[#016450] hover:bg-gray-200">
          About Us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;