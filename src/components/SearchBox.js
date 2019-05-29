import React, {Component} from "react";

class SearchBox extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="search" className="Search">
        <input 
          onKeyUp={
            (e) => {
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
export default SearchBox;

