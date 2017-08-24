import React from "react";
import PropTypes from "prop-types";
import TitleList from "./TitleList";

function TitleListGroup(props) {
  return (
    <div>
      {
        props.searchResults ? props.searchResults
          .map((movie, i) => {
            if (i < 5) {
              return <TitleList movie={movie} key={i} />;
            }
          }) :
          ""
      }
      {
        props.savedMovies ? props.savedMovies
          .map((movie, i) => {
            if (i < 5) {
              return <TitleList movie={movie} key={i} />;
            }
          }) :
          ""
      }
    </div>
  );
}

TitleListGroup.propTypes = {
  searchResults: PropTypes.array,
  savedMovies: PropTypes.array,
};

export default TitleListGroup;
