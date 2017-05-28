import React from "react";

function ListToggle(props) {
  return (
    <div
      className="ListToggle">
      {
        props.movie.isMyMovie ? <div onClick={() => props.removeMyMovie(props.movie)}>
          <i className="fa fa-fw fa-minus" />
          <i className="fa fa-fw fa-check" />
        </div> :
        <div onClick={() => props.saveMyMovie(props.movie)}>
          <i className="fa fa-fw fa-check" />
          <i className="fa fa-fw fa-plus" />
        </div>
      }
    </div>
    );
}
export default ListToggle;
