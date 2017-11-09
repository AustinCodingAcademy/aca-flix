export function loadMyMovieList() {
    return function(dispatch){
        console.log("called loadMyMovieList action")
        dispatch({
            type: "LOAD_MY_MOVIE_LIST"
        });
        fetch("/movies")
        .then((response) => {
            return response.json()
        })
        .then((movies) => {
            dispatch(myMovieListLoaded(movies));
        })    
    }
}

export function myMovieListLoaded(movies){
    console.log("called myMovieListLoaded action");
    return {
        type: "MY_MOVIE_LIST_LOADED",
        value: movies
    }
}

export function loadSearch(searchTerm) {
    return function(dispatch){
        let apiKey = 'd201dfe99583c2d7fea063e8fcf9b4dd';
        let fetchURL = 'http://api.themoviedb.org/3/search/multi?query=' + searchTerm + '&api_key=' + apiKey
        console.log("called loadSearch action with: ", searchTerm, "fetch URL: ", fetchURL);
        dispatch({
            type: "LOAD_SEARCH"
        });
        fetch(fetchURL)
        .then((response) => {
            return response.json()
        })
        .then((movies) => {
            dispatch(searchLoaded(movies))
        });
    }
}

export function searchLoaded(movies){
    console.log("called searchLoaded action")

    return {
        type: "SEARCH_RESULTS_LOADED",
        value: movies
    }
}

export function saveMyMovie(movie){
    console.log("called saveMyMovie action")
    return function(dispatch){
        fetch("/movies",{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(movie)
        }).then(() => dispatch(loadMyMovieList()));
    }
}

export function removeMyMovie(id){
    console.log("called removeMyMovie action")
    return function(dispatch){
        fetch("/movies/" + id, {
            method: "DELETE"
        }).then(() => dispatch(loadMyMovieList()));
    };
}






// * removeMyMovie(id)
// * make a fetch DELETE to “/movies/” + id
// * on complete dispatch to loadMyMovieList()