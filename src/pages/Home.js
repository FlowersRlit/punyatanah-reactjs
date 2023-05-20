import React from "react";
import Headline from "../components/HomeComponents/Headline";
import MarketplacePreview from "../components/HomeComponents/MarketplacePreview";
import Review from "../components/HomeComponents/Review";
import person2 from "../assets/ankara-4940331_960_720.jpg";
import ReactTypingEffect from "react-typing-effect";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Headline />
      <MarketplacePreview />
      {/* testimonials */}
      <div className="container my-20">
        <h2 className="align px-24 text-center text-4xl text-black">
          <span className="text-hijau1">Over 50,000 of people</span> have
          registered, and <br />
          <ReactTypingEffect
            text={[
              "87% of 13,273 of people are satisfied with us.",
              "many have trusted their lands to us.",
            ]}
            eraseDelay={5000}
            typingDelay={50}
            speed={100}
            eraseSpeed={50}
            className="font-medium text-orange1 underline"
          />{" "}
          <br />
          <br />
          These are what they said about us:
        </h2>
        {/* review */}
        <div className="flex gap-6 overflow-hidden hover:overflow-visible">
          <Review
            picture={person2}
            as="Customer"
            user="Budi Andono"
            message="Terima kasih kepada PunyaTanah.com sekarang saya punya tanah impian saya setelah bertahun tahun terkena penipuan tanah"
          />
          <Review
            picture={person2}
            as="Seller"
            user="M. Irawan"
            message="Alhamdulillah tanah saya dapat terjual dengan lebih cepat dan mudah disini"
          />
          <Review
            picture={person2}
            as="Seller"
            user="Juna Winata"
            message="Sudah 2 tahun saya jualan tanah dan aga sulit mendapatkan pelanggan karena tempat saya yang cukup terpencil, tapi setelah menggunakan website ini tanah saya jadi laku terjual semua"
          />
        </div>
      </div>
      <div className="py-20">
        <h2 className="py-5 text-center text-5xl font-bold text-black1">
          So, <span className="text-hijau1">what are you waiting for?</span>
        </h2>
        <div className="mb-20 flex justify-center">
          <NavLink
            className="rounded-md border-2 border-orange1 py-5 px-10 text-xl font-semibold text-orange1 hover:bg-orange1 hover:text-white hover:shadow-xl"
            to="./">
            Sell my land now.
          </NavLink>
        </div>
      </div>
    </>
    // create form to sell land
  );
};

export default Home;
