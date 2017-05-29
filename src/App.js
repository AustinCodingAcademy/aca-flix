import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";

import SearchBoxContainer from "./containers/SearchBoxContainer";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";

class App extends Component {
  componentWillMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          {/*  <Navigation>   */}
          <Navigation />
          {/*  </Navigation>   */}
          <SearchBoxContainer />
          {/*  <UserProfile>   */}
          <UserProfile />
          {/*  </UserProfile>   */}
        </header>
        <Hero />
        <TitleList
          title="Search Results"
          movies={this.props.searchResults} />
        <TitleList
          title="My Movies"
          movies={this.props.favoriteMovies} />
      </div>
    );
  }
}

App.propTypes = {
  searchResults: PropTypes.array,
  myMovieList: PropTypes.array,
  onMount: PropTypes.func
};

export default App;
