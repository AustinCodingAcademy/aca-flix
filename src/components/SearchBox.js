import React, {Component} from "react";

const apiKey = "87dfa1c669eea853da609d4968d294be";
class SearchBox extends Component {
  constructor() {
    super();
    this.state = {searchTerm: ""};
  }
  render() {
    return (
      <div id="search" className="Search">
        <input 
          onKeyUp={
            (e) => {
              /* this is so th search will only be done on enter key */
              if (e.key === "Enter" && this.state.searchTerm) {
                this.props.setSearchTerm(this.state.searchTerm);
              }
            }
          } 
          onChange={
            (e) => {
              this.setState({searchTerm: e.target.value});    
            }
          } 
          type="search" placeholder="Search for a title..." 
          value={this.state.searchTerm} />
      </div>
    );
  }
}
export default SearchBox;

