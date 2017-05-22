import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css";
import Hero from "./components/Hero";
import Logo from "./Logo.js";
import Navigation from "./components/Navigation";
import SearchBox from "./components/SearchBox";
import TitleList from "./components/TitleList";
import UserProfile from "./components/UserProfile";

class App extends Component {
  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <SearchBox />
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
