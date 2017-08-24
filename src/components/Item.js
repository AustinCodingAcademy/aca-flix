import React from "react";
import ListToggleContainer from "../containers/ListToggleContainer";

function Item(props) {
  debugger;
  let name = "";
  let backDrop = "http://image.tmdb.org/t/p/original" + props.movie.backdrop_path;
  if(!props.movie.name) {
    name = props.movie.original_title;
  } else {
    name = props.movie.name;
  }

  return (
    <div className="Item" style={{backgroundImage: 'url(' + backDrop + ')'}} >
      <div className="overlay">
        <div className="title">{name}</div>
        <div className="rating">{props.movie.vote_average} / 10</div>
        <div className="plot">{props.movie.overview}</div>
        <ListToggleContainer movie={props.movie}/>
      </div>
    </div>
  );
}
export default Item;
