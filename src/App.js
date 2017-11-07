import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";


class App extends Component {

  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d201dfe99583c2d7fea063e8fcf9b4dd&language=en-US&page=1")
    .then(response => response.json())
    .then(movies => console.log(movies))
  }


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
