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

  componentDidMount(){
    this.props.loadMyMovieList();
    
  }

  loadSearch() {
        let apiKey = 'd201dfe99583c2d7fea063e8fcf9b4dd';
        let fetchURL = "https://api.themoviedb.org/3/search/movie?api_key=d201dfe99583c2d7fea063e8fcf9b4dd&language=en-US&query=the%20lion%20king&page=1&include_adult=false"
       
        fetch(fetchURL)
        .then((response) => {
            return response.json()
        })
        .then((movies) => {
            console.log("movie", movies)
        });
    
  }

  render() {
    this.loadSearch()
    console.log(this.props)
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
export default App;
