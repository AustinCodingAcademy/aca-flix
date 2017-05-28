import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css";
import Hero from "./components/Hero";
import Logo from "./Logo.js";
import Navigation from "./components/Navigation";
import SearchBoxContainer from "./containers/SearchBoxContainer";
import TitleList from "./components/TitleList";
import UserProfile from "./components/UserProfile";
import {loadMyMovieList} from "./actions";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
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

App.propTypes = {
  searchResults: PropTypes.array.isRequired,
  myMovieList: PropTypes.array.isRequired
};

export default App;
