import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import SearchBox from "./containers/SearchBoxContainer";

class App extends Component {

  componentDidMount = () => {
    this.props.loadMyMovieList();
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
          movies={this.props.myMovieList}
          myMovies={this.props.myMovieList} />
      </div>
    );
  }
}

App.propTypes = {
  searchResults: PropTypes.array,
  myMovieList: PropTypes.array,
  loadMyMovieList: PropTypes.func
};

export default App;
