import React, {Component} from "react";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    }
  }

  render() {
    return (
      <div id="search" className="Search">
        <input 
          onKeyUp={
            (e) => {
              /* this is so th search will only be done on enter key */
              if (e.key === "Enter") {
                this.props.loadSearch(this.state.searchTerm);
              }
            }
          }
          onChange={
            () => {
              this.setState({ searchTerm: document.getElementById("searchbox").value });
            }
          }
          type="search" 
          placeholder="Search for a title..."
          id="searchbox" />
      </div>
    );
  }
}
export default SearchBox;

