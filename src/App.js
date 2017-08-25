import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";
// import SearchBox from "./components/SearchBox";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import SearchBoxContainer from "./containers/SearchBoxContainer";
import {loadMyMovieList} from "./actions/index";
// import AppContainer from "./containers/AppContainer";
import {connect} from "react-redux";

class App extends Component {
  componentDidMount(){
    console.log("mounted",this.props.loadMyMovieList);
     this.props.loadMyMovieList();
   }
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
}
  App.propTypes = {
    searchResults: PropTypes.array.isRequired,
    myMovieList: PropTypes.array.isRequired,
  };
  function mapStateToProps(state) {
     return {
       searchResults: state.searchResults,
       myMovieList: state.myMovieList
     }
   }

   function mapDispatchToProps(dispatch) {
     return {
       loadMyMovieList: function () {
         dispatch(loadMyMovieList());
       }
     }
   }
export default connect(mapStateToProps, mapDispatchToProps)(App);
