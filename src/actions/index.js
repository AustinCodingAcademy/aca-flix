export const loadMyMovieList = () => {
    return (dispatch) => {
        fetch("./movies")
        .then((res) => {
            return res.json()
        })
        .then((movies) => {
            dispatch(myMovieListLoaded(movies))
        })
    };
}

export const myMovieListLoaded = (movies) => {
    return {
    type: 'MY_MOVIE_LIST_LOADED',
    value: movies
    };
}