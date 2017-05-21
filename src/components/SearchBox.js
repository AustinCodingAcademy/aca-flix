import React, {Component} from "react";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.searchTerm = "";
  }
  render() {
    return (
      <div id="search" className="Search">
        <input
          onChange={(event) => {
            this.props.onChange(event.target.searchTerm);
          }}

          onKeyUp={
            (e) => {


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
