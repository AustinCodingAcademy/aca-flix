import React, {Component} from "react";
import PropTypes from "prop-types";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
  }
  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }
  render() {
    return (
      <div id="search" className="Search">
        <input onChange={(input) => {
          this.setState({
            searchTerm: input.target.value
          });
        }}
          onKeyUp={(e) => {
            /* this is so the search will only be done on enter key */
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
  loadSearch: PropTypes.func.isRequired
};

export default SearchBox;
