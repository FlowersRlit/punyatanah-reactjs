import React from "react";
import PunyaTanah from "../components/AboutComponents/PunyaTanah";
import ReactTypingEffect from "react-typing-effect";
import Review from "../components/AboutComponents/Review";
import person2 from "../assets/Foto1.webp";

const About = () => {
  return (
    <div className="py-20">
      {/* introduction starts */}
      <div className="container">
        <h1 className="pt-10 pb-5 text-5xl font-semibold text-black">
          What is <PunyaTanah extra="?" />
        </h1>

        <div
          className="px-20 text-justify font-medium text-black1"
          id="#opening">
          <h4 className="text-2xl">
            <PunyaTanah /> <span className="italic">is an e-commerce app</span>{" "}
            but for land, to be exact. So, what is PunyaTanah.com and why?{" "}
            <PunyaTanah extra=" and why?" />
            <br />
            <br />
            The concept of <PunyaTanah /> was originally an idea from the Diva
            Agustian, which at that time we were discussing for the main topic
            of our group project website. Later then, the name and logo was
            developed by Awan.
          </h4>
          <br />
          <div className="my-8 flex h-0.5 items-center justify-center rounded-full bg-black1 p-0 opacity-10"></div>
        </div>
      </div>

      {/* line */}

      <div className="z-20 flex h-auto w-full bg-hijau1">
        <h2 className="container py-24 text-3xl text-white">
          Our goal here at <PunyaTanah /> is to seamlessly enhance your land
          browsing experience. Browse through many type of land, starting from
          each a tiny cuboid, or even as expensive as your plane ticket to
          Jakarta!
          <br />
          <br />
          We{" "}
          <span className="underline hover:text-orange1">
            connect you, and land seller
          </span>{" "}
          directly through the app to find the land that suites you the best. We
          organize lands available within Indonesia by categories, pricing, and
          location. Browse today, before it's too late!
        </h2>
      </div>

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
    </div>
  );
};

export default About;
