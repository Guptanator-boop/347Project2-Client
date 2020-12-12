const API_KEY = '32a683d6e47d7bf3d66fbb4c7b83c854';
const baseURL = 'https://api.themoviedb.org/3/';

export const Action = Object.freeze({
    LoadReviews: 'LoadReviews',
    LoadTrending: 'LoadTrending',
});

export function loadReviews(reviews){
    return{
        type: Action.LoadReviews,
        payload: reviews,
    };
}

export function search(keyword) {
    let url = ''.concat(baseURL, 'search/movie?api_key=', API_KEY, '&query=', keyword);
    fetch(url)
    .then(result => result.json)
    .then((data) => {
        document.getElementById('output').innerHTML = JSON.stringify(data, null, 4);
    })
}

function fetchSources() {
    let url = "".concat(baseURL, 'configuration?api_key=', API_KEY);
    fetch(url)
    .then((result) => {
        return result.json();
    })
    .then((data) => {
        let baseImageURL = data.images.secure_base_url;
        // configData = data.images;
        search(baseImageURL);
    })
}

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

export function loadTrendingAction(movies){
    return{
        type: Action.LoadTrending,
        payload: movies,
    };
}

function populateTrending(movies) {
    //console.log(movies);
}

function checkForErrors(response){
    if(!response.ok){
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}