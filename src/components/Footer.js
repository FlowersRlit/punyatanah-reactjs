import React from "react";
import { NavLink } from "react-router-dom";
import FooterMiddleCols from "./MiscComponents/FooterMiddleCols";
import FooterForthCol from "./MiscComponents/FooterForthCol";
import FooterColsTitle from "./MiscComponents/FooterColsTitle";
import { BsFillHouseDoorFill, BsInstagram, BsGithub } from "react-icons/bs";
import { HiMail, HiPrinter } from "react-icons/hi";
import { ImPhone, ImFacebook, ImTwitter, ImLinkedin2 } from "react-icons/im";
import FooterSvgFill from "./MiscComponents/FooterSvgFill";
import Logo from "../assets/logopunyatanah.svg";

const Footer = () => {
  return (
    <div className="bg-white text-center text-hijau1 lg:text-left">
      <div className="mr-6 ml-6 flex items-center justify-center border-b-2 border-orange1 p-6 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* social media icons */}
        {/* facebook */}
        <div className="flex justify-center">
          <FooterSvgFill
            Icon={<ImFacebook />}
            Redirect="https://www.facebook.com"
          />
          {/* twitter */}
          <FooterSvgFill Icon={<ImTwitter />} Redirect="https://twitter.com" />
          {/* instagram */}
          <FooterSvgFill
            Icon={<BsInstagram />}
            Redirect="https://www.instagram.com/"
          />
          {/* linkedin */}
          <FooterSvgFill
            Icon={<ImLinkedin2 />}
            Redirect="https://www.linkedin.com"
          />
          {/* github */}
          <FooterSvgFill
            Icon={<BsGithub />}
            Redirect="https://github.com/FlowersRlit/punyatanah-reactjs"
          />
        </div>
      </div>

      {/* beneath line */}
      <div className="mx-32 py-10 text-center md:text-left">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* first coloumn */}
          <div className="flex items-start justify-center">
            <img src={Logo} alt="logo-footer" />
          </div>

          {/* second coloumn */}
          <div>
            <FooterColsTitle Title="Products" />
            {/* second col starts */}
            <FooterMiddleCols Title="Apartment" Page="./" />
            <FooterMiddleCols Title="House" Page="./" />
            <FooterMiddleCols Title="Ranch" Page="./" />
            <FooterMiddleCols Title="Yard" Page="./" />
          </div>

          {/* third coloumn */}
          <div>
            <FooterColsTitle Title="Useful Links" />
            {/* third col starts */}
            <FooterMiddleCols Title="About" Page="./" />
            <FooterMiddleCols Title="Sell" Page="./" />
            <FooterMiddleCols Title="Marketplace" Page="./marketplace" />
            <FooterMiddleCols Title="Review" Page="./" />
          </div>

          {/* forth coloumn */}
          <div>
            <FooterColsTitle Title="Contact" />
            {/* forth col starts */}
            {/* 1 */}
            <FooterForthCol
              Caption="Jakarta Selatan 10250, Indonesia"
              Icon={<BsFillHouseDoorFill />}
            />
            {/* 2 */}
            <FooterForthCol
              Caption="konsultasi@punyatanah.com"
              Icon={<HiMail />}
            />
            {/* 3 */}
            <FooterForthCol Caption="(021) 123 654 88" Icon={<ImPhone />} />
            {/* 4 */}
            <FooterForthCol Caption="(021) 887 675 32" Icon={<HiPrinter />} />
          </div>
        </div>
      </div>

      {/* attribution */}
      <div className="bg-hijau1 p-6 text-center">
        <span>© 2023 Copyright: </span>
        <NavLink
          className="font-semibold text-white hover:underline"
          to="https://github.com/FlowersRlit/punyatanah-reactjs">
          Kelompok 4 - Harisenin.com Fullstack Developer Bootcamp Batch 5
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
