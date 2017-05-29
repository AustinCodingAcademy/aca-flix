import React from "react";
import Item from "./Item";

function TitleList(props) {
  return (
    <div
      className="TitleList"
      data-loaded={props.movies && props.movies.length > 0}>
      <div className="Title">
        <h1>{props.movie.title}</h1>
        <div className="titles-wrapper">
          <Item key={props.movie.id} movie={props.movie} />
        </div>
      </div>
    </div>
  );
}
export default TitleList;
