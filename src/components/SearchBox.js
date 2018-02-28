import React, {Component} from "react";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {searchTerm: ""};
  }

  render() {
    return (
      <div id="search" className="Search">
        <input onChange={(e)=>{
            let newSearch = e.target.value;
            this.setState({searchTerm: newSearch});
            //console.log("Search Term: ",this.state.searchTerm);
          }}
          onKeyUp={
            (e) => {
              /* this is so th search will only be done on enter key */
              console.log("OnKeyUp: ",e.key);
              if (this.props.loadSearch && e.key === "Enter" && this.state.searchTerm) {
                this.props.loadSearch(this.state.searchTerm);
                console.log("Search Term on Enter: ",this.state.searchTerm);
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
