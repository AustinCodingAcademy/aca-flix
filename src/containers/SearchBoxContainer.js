import React from 'react';
import { connect } from 'react-redux';
import {loadSearch} from "../actions";
import SearchBox from "../components/SearchBox";


function mapDispatchToProps(dispatch){
return {
  loadSearch: function(text){
    dispatch(loadSearch(text));
  }
}
}

const SearchBoxContainer = connect(null,mapDispatchToProps)(SearchBox);
export default SearchBoxContainer;
