import React from "react";
import about from "../../../assets/About/about.jpg";
const About = () => {
  return (
    <div>
      <div id="about" className="hero bg-base-100 lg:py-8">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img alt="about me" src={about} className=" rounded-sm shadow-2xl" />
          <div className="text-start">
            <p className="text-sm tracking-widest text-primary">HELLO THERE!</p>
            <h1 className="text-4xl head font-normal">I'm Caroline.</h1>
            <hr className="border-primary w-1/5 my-3 " />
            <p className="py-2 normal-case whitespace-normal">
              A wedding, pre-wedding and fashion photographer based in central
              Europe.
            </p>
            <p className="py-2 normal-case whitespace-normal">
              Mauris porttitor magna vel ante luctus convallis. Nunc at tellus
              erat. Donec et magni lectus. Aliquam egestas vel arcu id maximus.
              Orci varius natoque penatibus et mate dis parturient montes,
              nascetur ridiculus miss.
            </p>
            <p className="py-2 normal-case whitespace-normal">
              Quisque efficitur nisi nec tellus fringilla posuere. Sed ut
              scelerisque tortor. Mauris maximus sollicitudin purus, sed
              fringilla lorem auctor eget. Interdum et malesuada duruthemes the
              miss a comp dresire ifames.
            </p>
            <p className="logo text-3xl">Caroline K.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
