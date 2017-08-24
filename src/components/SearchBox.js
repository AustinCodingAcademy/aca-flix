import React, {Component} from "react";
import PropTypes from "prop-types";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return (
      <div id="search" className="Search">
        <input
          onKeyUp={
            (e) => {
              /* this is so the search will only be performed when enter key is pressed */
              if (this.props.loadSearch && e.key === "Enter" && this.state.searchTerm) {
                this.props.loadSearch(this.state.searchTerm);
              }
            }
          }
          onChange={this.handleChange.bind(this)}
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
