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
        <div className="flex gap-6 overflow-hidden hover:overflow-auto">
          <Review
            picture={person2}
            as="Customer"
            user="lorem ipsum"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <Review
            picture={person2}
            user="lorem ipsum"
            message="Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur."
          />
          <Review
            picture={person2}
            user="lorem ipsum"
            message="Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur."
          />
          <Review
            picture={person2}
            user="lorem ipsum"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <Review
            picture={person2}
            user="lorem ipsum"
            message="Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur."
          />
          <Review
            picture={person2}
            user="lorem ipsum"
            message="Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur."
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
