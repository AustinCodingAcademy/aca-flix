import React, {Component} from "react";
// import {loadSearch} from "../actions";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {searchTerm: ""}
  }
  render() {
    return (
      <div id="search" className="Search">
        <input
          onChange={
            (e) => this.setState({searchTerm: e.target.value})
          }
          onKeyUp={
            (e) => {
              console.log('keypu');
              console.log(this.props.loadSearch);
              console.log(this.state.searchTerm);
              /* this is so the search will only be done on enter key */
              if (this.props.loadSearch && e.key === "Enter" && this.state.searchTerm) {
                console.log("enter");
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
