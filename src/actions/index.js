export function loadMyMovieList() {
    return function(dispatch){
        dispatch({
            type: "LOAD_MY_MOVIE_LIST"
        });
        fetch("/movies")
        .then((response) => {
            response.json()
        })
        .then((movies) => {
            dispatch(myMovieListLoaded(movies));
        })    
    }
}

export function myMovieListLoaded(movies){
    return {
        type: "MY_MOVIE_LIST_LOADED",
        value: movies
    }
}

export function loadSearch(searchTerm) {
    return function(dispatch){
        let apiKey = 'd201dfe99583c2d7fea063e8fcf9b4dd';
        dispatch({
            type: "LOAD_SEARCH"
        });
        fetch('http://api.themoviedb.org/3/search/multi?query=' + searchTerm + '&api_key=' + apiKey)
        .then(response => response.json())
        .then(movies => dispatch(searchLoaded(movies)))
    }
}

export function searchLoaded(movies){
    return {
        type: "SEARCH_RESULTS_LOADED",
        value: movies.results
    }
}

export function saveMyMovie(movie){
    return function(dispatch){
        fetch("/movies",{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(movie)
        }).then(() => dispatch(loadMyMovieList()));
    }
}

export function removeMyMovie(id){
    return function(dispatch){
        fetch("/movies/" + id, {
            method: "DELETE"
        }).then(() => dispatch(loadMyMovieList()));
    };
}






// * removeMyMovie(id)
// * make a fetch DELETE to “/movies/” + id
// * on complete dispatch to loadMyMovieList()