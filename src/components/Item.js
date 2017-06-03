import React from "react";
import ListToggleContainer from "../containers/ListToggleContainer";
import PropTypes from "prop-types";

function Item(props) {
  debugger;
  let name = "";
  const backDrop = "http://image.tmdb.org/t/p/original" + props.movie.backdropPath;
  if (!props.movie.name) {
    name = props.movie.originalTitle;
  } else {
    name = props.movie.name;
  }
  return (
    <div className="Item" style={{backgroundImage: "url(" + backDrop + ")"}} >
      <div className="overlay">
        <div className="title">{name}</div>
        <div className="rating">{props.movie.voteAverage} / 10</div>
        <div className="plot">{props.movie.overview}</div>
        <ListToggleContainer movie={props.movie} />
      </div>
    </div>
  );
}

Item.propTypes = {
  movie: PropTypes.shape({
    voteAverage: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    originalTitle: PropTypes.string.isRequired,
    backdropPath: PropTypes.string.isRequired
  }).isRequired
};

export default Item;
