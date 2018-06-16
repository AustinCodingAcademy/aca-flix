import React from "react";
import HeroButton from "./HeroButton";

function Hero() {
  return (
    <div id="hero" className="Hero" style={{backgroundImage: "url(https://images3.alphacoders.com/882/thumb-1920-882548.jpg)"}}>
      <div className="content">
        <img className="logo" src="https://www.returndates.com/backgrounds/strangerthings.logo.png" alt="stranger things background" />
        <h2>Season 2 now available</h2>
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
