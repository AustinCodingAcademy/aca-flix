import React, {Component} from "react";



class SearchBox extends Component {

  constructor() {
    super();
    searchTerm: "";
  }

  componentWillMount() {
    if (this.props.onMountSearchBox) {
      this.props.onMountSearchBox();
    }
  }


  render() {
    return (
      <div id="search" className="Search">
        <input
          onChange{
            setState() => {
              searchTerm = input.value
            }
          }
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
export default SearchBox;
