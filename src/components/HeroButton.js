import React from "react";

function HeroButton(props) {
  return (
    <a href="#" className="Button" data-primary={props.primary}>{props.text}</a>
  );
}

export default HeroButton;
