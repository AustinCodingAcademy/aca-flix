import React, {Component} from "react";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: ""
    };
  }
  render() {
    return (
      <div id="search" className="Search">
        <input
          onKeyUp={
            (e) => {

              if (this.props.loadSearch && e.key === "Enter" && this.state.searchTerm) {
                this.props.loadSearch(this.state.searchTerm);
              }
            }
          }
          onChange={
                     () => {
                       this.setState({
                         searchTerm: this.props.searchTerm
                       })
                     }
                   }

          type="search"
          placeholder="Search for a title..." />
      </div>
    );
  }
}
export default SearchBox;
