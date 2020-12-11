const API_KEY = '32a683d6e47d7bf3d66fbb4c7b83c854';
let configData = null;

function fetchSources() {
    const baseURL = 'https://api.themoviedb.org/3/';
    let url = "".concat(baseURL, 'configuration?api_key=', APIKEY);
    fetch(url)
    .then((result) => {
        return result.json();
    })
    .then((data) => {
        baseImageURL = data.images.secure_base_url;
        configData = data.images;
        search('jaws');
    })
}

function search(keyword) {
    let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
    fetch(url)
    .then(result => result.json)
    .then((data) => {
        document.getElementById('output').innerHTML = JSON.stringify(data, null, 4);
    })
}