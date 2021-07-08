import React from "react";
import HeroButton from "./HeroButton";
import ArrestedBackground from "../media/ArrestedBackground.png";
import logo from "../media/logo.png";

function Hero() {
  return (
    <div id="hero" className="Hero" style={{backgroundImage: "url("+ArrestedBackground+")"}}>
      <div className="content">
        <img className="logo" src={logo} alt="narcos background" />
        <h2>Season 6 Coming This Fall!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloremque id quam sapiente unde voluptatum alias vero debitis,
          magnam quis quod.</p>
        <div className="button-wrapper">
          <HeroButton primary="true" text="Watch now" />
          <HeroButton primary="false" text="+ My list" />
        </div>
      </div>
      <div className="overlay" />
    </div>
  );
}
export default Hero;
