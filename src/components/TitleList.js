import React from "react";
import PropTypes from "prop-types";
import take from "lodash/take";
import Item from "./Item";

const renderTitles = (props) => {
  if (props.movies) {
    // Using the take method from lodash library to reduce the array of titles to 5
    const firstFiveTitles = take(props.movies, 5);
    return firstFiveTitles.map((title, i) => {
      return <Item key={i} movie={title} />;
    });
  }
};

function TitleList(props) {

  return (
    <div
      className="TitleList"
      style={{
        opacity: (props.movies && props.movies.length > 0) && "1",
      }}
    >
      <div className="Title">
        <h1>{props.title}</h1>
        <div className="titles-wrapper">
          {renderTitles(props)}
        </div>
      </div>
    </div>
  );
}

TitleList.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.array,
};

export default TitleList;
