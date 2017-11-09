import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import SearchBoxContainer from "./containers/SearchBoxContainer";
import TitleList from "./components/TitleList";
import UserProfile from "./components/UserProfile";

class App extends Component {
  componentDidMount() {
    this.props.loadMyMovieList();
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
        <TitleList title="Search Results" movies={this.props.searchResults} />
        <TitleList title="My Movies" movies={this.props.myMovieList} />
      </div>
    );
  }
}

App.propTypes = {
  myMovieList: PropTypes.array,
  searchResults: PropTypes.array
};
export default App;
