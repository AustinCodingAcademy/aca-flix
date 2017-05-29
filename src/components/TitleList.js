import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function TitleList(props) {
//  console.log("tile list props:  ", props.movies);
  // console.log("tile list props:  ", props.movies.length);
  let titles = "";
  console.log("this is props ", props.movies);
  if (props.movies) {
    titles = props.movies.map(function (title, i) {
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

TitleList.propTypes = {
  movies: PropTypes.array,
  title: PropTypes.string
};
