import React, { Component } from "react";
import Item from "./Item";

function TitleList(props) {
  console.log("tile list props:  ", props.movies);
  console.log("tile list props:  ", props.movies.length);
  let titles = "";
  if (props.movies) {
    titles = props.movies.map(function (title, i) {
                console.log("what is this? ", titles);
      if (i < 5) {
        return (
          <Item key={title.id} movie={title} />

        );
      }
      return (<div key={title.id} />);
    });
  }

  return (
    <div
      className="TitleList"
      data-loaded={props.movies && props.movies.length > 0}>
      <div className="Title">
        <h1>{props.title}</h1>
        <div className="titles-wrapper">
          {titles}
        </div>
      </div>
    </div>
  );
}
export default TitleList;
