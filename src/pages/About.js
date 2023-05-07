import React from "react";
import PunyaTanah from "../components/AboutComponents/PunyaTanah";

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
    </div>
  );
};

export default About;
