import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="bg-hero">
      <div>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 hero-heading text-5xl font-bold text-base-100">
              Wedding in Filzmoos San & Paul
            </h1>
            <p className="mb-5 text-base-100 uppercase">
              WEdding in austria
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
