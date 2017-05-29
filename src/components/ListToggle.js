import React from "react";
import PropTypes from "prop-types";

function ListToggle(props) {
  return (
    <div
      className="ListToggle">
      {
        props.movie.isMyMovie ? <div onClick={() => props.removeMovie(props.movie)}>
          <i className="fa fa-fw fa-check" />
          <i className="fa fa-fw fa-minus" />
        </div> :
        <div onClick={() => props.saveMovie(props.movie)}>
          <i className="fa fa-fw fa-check" />
          <i className="fa fa-fw fa-plus" />
        </div>
      }
    </div>
  );
}

ListToggle.propTypes = {
  movie: PropTypes.object,
  removeMovie: PropTypes.func,
  saveMovie: PropTypes.func
};

export default ListToggle;
