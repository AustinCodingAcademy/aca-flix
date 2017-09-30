import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";
import SearchBoxContainer from "./components/SearchBoxContainer";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBcAGEYePE2zv1JOWht8LE8jlCo9YG9Bpg",
  authDomain: "movie-search-database.firebaseapp.com",
  databaseURL: "https://movie-search-database.firebaseio.com",
  projectId: "movie-search-database",
  storageBucket: "",
  messagingSenderId: "946011060545"
};
firebase.initializeApp(config);

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.loadMovies;
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
  myMovieList: PropTypes.array.isRequired,
  loadMovies: PropTypes.func.isRequired
};

export default App;
