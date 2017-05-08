import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Logo from "./Logo.js";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";

var   apiKey = "87dfa1c669eea853da609d4968d294be";
class App extends Component {

  constructor() {
    super();
    this.state =  {searchTerm:"", searchUrl:""};
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  handleKeyUp(e){
    if (e.key === "Enter" && this.state.searchTerm !== "") {
      var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + apiKey;
      this.setState({searchUrl:searchUrl});
    }
  }
  handleChange(e){
      this.setState({searchTerm : e.target.value});    
  }
  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <input 
            onKeyUp={this.handleKeyUp} 
            onChange={this.handleChange} 
            type="search" placeholder="Search for a title..." 
            value={this.state.searchTerm}/>
          </div>
          <UserProfile />
        </header>
        <Hero />
        <TitleList title="Search Results" url={this.state.searchUrl} />
        <TitleList title="Top TV picks for Jack" url="discover/tv?sort_by=popularity.desc&page=1" />
      </div>
    );
  }
}
export default App;
