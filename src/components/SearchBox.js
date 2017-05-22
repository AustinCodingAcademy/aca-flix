import React, {Component} from "react";
import PropTypes from "prop-types";


function SearchBox(props) {
  return (
    <div id="search" className="Search">
      <input
        onKeyUp={e => {
          if (e.key === "Enter") {
            console.log("hi", props.searchTerm);
            props.handleLoadSearch(props.searchTerm);
          }
        }}
        type="search"
        value={props.searchTerm}
        placeholder="Search for a title..."
        onChange={props.handleChange}
      />
    </div>
  );
}

SearchBox.propTypes = {
  loadSearchTerm: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default SearchBox;
