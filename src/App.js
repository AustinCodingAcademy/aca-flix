import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";
// import SearchBox from "./components/SearchBox";
import SearchBoxContainer from "./containers/SearchBoxContainer";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import {loadMyMovieList} from "./actions";

class App extends Component {
  componentDidMount() {
    loadMyMovieList();
  }
  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <SearchBoxContainer />
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
/*
App.propTypes = {
  TitleList.movies: PropTypes.shape({
    searchResults: PropTypes.array.isRequired,
    myMovieList: PropTypes.array.isRequired
  }).isRequired
};
*/
export default App;
