import React, {Component} from "react";
import PropTypes from "prop-types";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
  }

  render() {
    return (
      <div id="search" className="Search">
        <input
          onChange={(e) => this.setState({searchTerm: e.target.value})}
          onKeyUp={
            (e) => {
              /* this is so th search will only be done on enter key */
              if (this.props.loadSearch && e.key === "Enter" && this.state.searchTerm) {
                this.props.loadSearch(this.state.searchTerm);
              }
            }
          } 
          type="search" 
          placeholder="Search for a title..." />
      </div>
    );
  }
}

SearchBox.propTypes = {
  loadSearch: PropTypes.func,
};

export default SearchBox;

