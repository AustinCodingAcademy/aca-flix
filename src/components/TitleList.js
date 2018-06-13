// import React, { Component } from "react";
import PropTypes from "prop-types";
import React from "react";
import Item from "./Item";

function TitleList(props) {
  // console.log(props.title);
  
  let titles = "";
  // const myMovieIds = props.myMovies;
  if (props.movies) {
    titles = props.movies.map(function (title, i) {
      if (i < 5) {
        // if (props.title === "Search Results") {
        //   setTimeout(() => {
        //     const findId = myMovieIds.find(mv => mv.id === title.id);
        //     console.log(findId);
        //   }, 100);
        // }
        
        return (
          <Item key={title.id} movie={title} />
        );  
      } 
      return (<div key={title.id} />);
    }); 
  } 
  
  return (
    <div 
      className="TitleList" 
      data-loaded={props.movies && props.movies.length > 0}>
      <div className="Title">
        <h1>{props.title}</h1>
        <div className="titles-wrapper">
          {titles}
        </div>
      </div>
    </div>
  );
}

TitleList.propTypes = {
  movies: PropTypes.array,
  title: PropTypes.string
};


export default TitleList;
