import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import SearchBoxContainer from "./containers/SearchBoxContainer";

class App extends Component {

  componentDidMount() {
    if (this.props.loadMyMovieList) {
      this.props.loadMyMovieList();
    }
  }



  render() {
console.log("search results in APP.js:  ", this.props.searchResults.original_title)

    return (
      <div>
        <header className="Header">
          <Logo />
          {/* NAV */}
          <Navigation />
          <SearchBoxContainer />
          {/* User Prof */}
          <UserProfile />
        </header>
        <Hero />
        <TitleList
          title="Search Results"

          movies={this.props.searchResults} />
        <TitleList
          title="My Movies"
          movies={this.props.myMovieList} />
      </div>
    );
  }
}
export default App;

App.propTypes = {
  searchResults: PropTypes.array,
  myMovieList: PropTypes.array,
  loadMyMovieList: PropTypes.array

};
