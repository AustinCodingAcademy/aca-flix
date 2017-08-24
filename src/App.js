import React, {Component} from "react";
// import PropTypes from "react-redux";
import "./App.css";
import Logo from "./Logo.js";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";
// import SearchBox from "./components/SearchBox";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import SearchBoxContainer from "./containers/SearchBoxContainer";
// import {loadMovieList} from "./actions/index";
// import AppContainer from "./containers/AppContainer";


class App extends Component {
  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
           <Navigation />

          {/*  </Navigation>   */}
           <SearchBoxContainer />
           <UserProfile />

          {/*  </UserProfile>   */}
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
 componentDidMount(){
   console.log("mounted",this.props.loadMovieList);

    // this.state.loadMovieList();
  }
  // PropTypes: {
  //   searchResults: React.PropTypes.string,
  //   myMovieList: React.PropTypes.array,
  // }
}




export default App;
