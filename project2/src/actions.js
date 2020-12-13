const API_KEY = '32a683d6e47d7bf3d66fbb4c7b83c854';
// const baseURL = 'https://api.themoviedb.org/3/';

export const Action = Object.freeze({
    LoadReviews: 'LoadReviews',
    LoadTrending: 'LoadTrending',
    LoadLatest: 'LoadLatest',
    LoadTopRated: 'LoadTopRated',
    LoadSearch: 'LoadSearch',
    FinishAddingReview: 'FinishAddingReview',
});

export function loadReviews(reviews){
    return{
        type: Action.LoadReviews,
        payload: reviews,
    };
}

export function search(keyword) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}&page=1`;
    return dispatch => {
        fetch(url, {
            "content-type": 'application/json',
        })
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            dispatch(loadSearchAction(data.results));
        })
        .catch(e => console.error(e));
    };
}

function loadSearchAction(search) {
    return{
        type: Action.LoadSearch,
        payload: search,
    };
}

// function fetchSources() {
//     let url = "".concat(baseURL, 'configuration?api_key=', API_KEY);
//     fetch(url)
//     .then((result) => {
//         return result.json();
//     })
//     .then((data) => {
//         let baseImageURL = data.images.secure_base_url;
//         // configData = data.images;
//         search(baseImageURL);
//     })
// }

export function loadTrending() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    return dispatch => {
        fetch(url, {
            "content-type": 'application/json',
        })
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {

            dispatch(loadTrendingAction(data.results));
        })
        .catch(e => console.error(e));
    };
}

export function loadTrendingAction(trendings){
    return{
        type: Action.LoadTrending,
        payload: trendings,
    };
}

export function loadLatest() {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
    return dispatch => {
        fetch(url, {
            "content-type": 'application/json',
        })
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            dispatch(loadLatestAction(data.results));
        })
        .catch(e => console.error(e));
    };
}

export function loadLatestAction(latests){
    return{
        type: Action.LoadLatest,
        payload: latests,
    };
}

export function loadTopRated() {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    return dispatch => {
        fetch(url, {
            "content-type": 'application/json',
        })
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            dispatch(loadTopRatedAction(data.results));
        })
        .catch(e => console.error(e));
    };
}

export function loadTopRatedAction(rated){
    return{
        type: Action.LoadTopRated,
        payload: rated,
    };
}

export function startAddingReview(name, movie, rate, mess){
    const review = {
        username: name, movie_name: movie, rating: rate, message: mess,
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    };

    return dispatch => {
        fetch(`/reviews`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if (data.ok){
                dispatch(finishAddingReview(review));
            }
        })
        .catch(e => console.error(e));
    }


}

export function finishAddingReview(review){
    return {
        type: Action.FinishAddingReview,
        payload: review,
    };
}

function checkForErrors(response){
    if(!response.ok){
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}