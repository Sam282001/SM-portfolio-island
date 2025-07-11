import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-8">
      Hi, I am <span className="font-semibold">Sameer</span> 👋
      <br />
      Aspiring Full Stack Developer from India
    </h1>
  ),
  2: (
    <InfoBox
      text="Developed a strong foundation and skillset through working on various projects."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Contributed to a range of projects and took on key responsibilities along the way. Curious about the impact?"
      link="/projects"
      btnText="Visit Projects"
    />
  ),
  4: (
    <InfoBox
      text="Looking to bring your idea to life? Let’s build something great, just a click away!"
      link="/contact"
      btnText="Let's Connect"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
