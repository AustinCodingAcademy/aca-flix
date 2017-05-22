import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";
import NavigationContainer from "./container/NavigationContainer";
import SearchBoxContainer from "./container/SearchBoxContainer";

class App extends Component {

  componentDidMount() {
    if (this.props.loadMyMovieList) {
      this.props.loadMyMovieList();
    }
  }

  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <NavigationContainer />

          <SearchBoxContainer />
          {/*  <UserProfile>   */}
          <div className="UserProfile">
            <div className="User">
              <div className="name">Jack Oliver</div>
              <div className="image">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/profile/profile-512_1.jpg" alt="profile" />
              </div>
            </div>
          </div>
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
export default App;

App.propTypes = {
  searchResults: PropTypes.array,
  myMovieList: PropTypes.array,
  loadMyMovieList: PropTypes.array
};
