import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-part font-serif">
      <div>
        <h1 className="pt-12 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">About </span>
          <span className="block text-yellow-400 xl:inline">us</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 px-48 pb-48 pt-24">
        <div className="border-r-2 border-black">
          <div className="mb-24">
            Everyday's JS is a resource built by the Pluralsight team for the
            JavaScript community.
          </div>
          With the help of community members contributing content to the
          site,Everyday's JS aims to also keep more advanced developers up to
          date on news, frameworks, and libraries.
        </div>
        <div className="mt-12">
          Because JavaScript is a great language for coding beginners, we've
          gathered some of the best learning resources around and built a
          JavaScript course to help new developers get up and running.
        </div>
      </div>
    </div>
  );
};

export default About;
