import React from "react";
import HeroButton from "./HeroButton";

function Hero() {
  return (
    <div id="hero" className="Hero" style={{backgroundImage: "url(https://images.alphacoders.com/633/633643.jpg)"}}>
      <div className="content">
        <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" />
        <h2>Season 2 now available</h2>
        <p>
          Enter a movie title in the search bar to access the full Netflix movie database.
          Add and remove movies to your favorites list by clicking on the plus or
          check in the upper right corner of the movie listing.
        </p>
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
