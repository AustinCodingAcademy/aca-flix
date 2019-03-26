export function loadMyMovieList(){
  return function(dispatch){
    // dispatch({type : "LOAD_MY_MOVIE_LIST"})
    fetch("http://localhost:4000/movies")
    .then(res=>res.json())
    .then((list)=>{
      dispatch(myMovieListLoaded(list))
    })
  }
}

export function myMovieListLoaded(movies){
  return{
    type: "MY_MOVIE_LIST_LOADED",
    value: movies
  }
}

export function loadSearch(searchTerm){
  return function(dispatch){
    // dispatch({type : "LOAD_SEARCH"})
    fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=aaeeda9440592bb331a7997a9a20c45e`)
    .then(res=>res.json())
    .then((movies)=>{
      dispatch(searchLoaded(movies))
    })
  }
}

export function searchLoaded(movies){
  return{
    type: "SEARCH_RESULTS_LOADED",
    value: movies.results
  }
}

export function saveMyMovie(movie){
  return function(dispatch){
    fetch("/movies",{
      method: 'post',
      body: JSON.stringify(movie),
      headers:{
        'content-type': 'application/json'
      } 
    })
    .then(res=>res.json)
    .then((movies)=>{
      dispatch(loadMyMovieList(movies))
    })
  }
}

  export function removeMyMovie(id){
    return function(dispatch){
      fetch(`/movies/${id}`,{
        method: 'delete',
        headers:{
          'content-type': 'application/json'
        } 
      })
      .then(res=>res.json)
      .then((movies)=>{
        dispatch(loadMyMovieList(movies))
      })
    }
  }