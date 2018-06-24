export function loadMyMovieList() {
    return function(dispatch) {
        dispatch({
            type: "LOAD_MY_MOVIE_LIST"
        });
        fetch("/movies").then((response) => {
            return response.json();
        }).then((movies) => {
            dispatch(myMovieListLoaded(movies));
        });
    };
};

export function myMovieListLoaded(movies) {
    return {
        type: "MY_MOVIE_LIST_LOADED",
        value: movies
    };
};

export function loadSearch(searchTerm) {
    return function(dispatch){
        dispatch({
            type: "LOAD_SEARCH"
        });
        //eslint-disable-next-line
        fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=aaeeda9440592bb331a7997a9a20c45e`).then((response) => {
            return response.json();
        }).then((movies) => {
            dispatch(searchLoaded(movies));
        });
    };
};

export function searchLoaded(movies) {
    return {
        type: "SEARCH_RESULTS_LOADED",
        value: movies.results
    };
};

export function saveMyMovie(movie) {
    return function(dispatch) {
        fetch("/movies", {
            method: "POST",
            body: JSON.stringify(movie),
            headers: {"Content-Type": "application/json"}
        }).then((response) => {
            return response.json();
        }).then((movies) => {
            dispatch(loadMyMovieList(movies));
        });
    };
};

export function removeMyMovie(id) {
    return function(dispatch) {
        fetch(`/movies/${id}`, {
            method: "delete",
            headers: {"content-type": "application/json"}
        }).then((response) => {
            return response.json();
        }).then((movies) => {
            dispatch(loadMyMovieList(movies));
        });
    };
};