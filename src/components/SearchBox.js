import React, {Component} from "react";

class SearchBox extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {searchTerm: ""};
  }
  handleChange(e) {
    const value = e.target.value;
    this.setState({searchTerm: value});
    console.log(this.state.searchTerm);
  }
  render() {
    return (
      <div id="search" className="Search">
        <input
          onChange={this.handleChange}
          onKeyUp={
            (e) => {
              /* this is so th search will only be done on enter key */
              if (this.props.loadSearch &&
                e.key === "Enter" &&
                this.state.searchTerm) {
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
export default SearchBox;
