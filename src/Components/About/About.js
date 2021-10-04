import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-part">
      <div>
        <p className="text-7xl pt-12">About</p>
      </div>
      <div className="grid grid-cols-2 px-48 pb-48 pt-24">
        <div className="border-r-2 border-black">
          <div className="mb-24">JavaScript.com is a resource built by the Pluralsight team for the
          JavaScript community.</div>
          With the help of community members contributing
          content to the site, JavaScript.com aims to also keep more advanced
          developers up to date on news, frameworks, and libraries.
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
