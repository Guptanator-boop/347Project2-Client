import React from 'react'
import {useDispatch} from 'react-redux';
import {search} from './actions';

export function MoviePage(props) {
    var movie = props.movie;
    const dispatch = useDispatch();
    const onSearch = () => {
        dispatch(search(document.getElementById('textbox').value));
      }
    if(movie === undefined) {
        movie = JSON.parse(localStorage.getItem("movie"));
    } else {
        localStorage.setItem("movie", JSON.stringify(movie));
    }
    const title = movie.original_title;
    const baseURL = "https://image.tmdb.org/t/p/original";
    const unavailable = "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png";
    if(movie.poster_path) {
        return (
            <React.Fragment>

            <div className="top">
            <a href="/"><img src='https://fontmeme.com/permalink/201213/ed9fb521c5ce730fca51654044a68288.png' alt="Movies2Watch"></img></a>
                <div className="searchbar">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search..." name="search"></input>
                    <input type="image" id="search-button" onClick={onSearch} src={process.env.PUBLIC_URL + '/search.png'} />
                </form>
                </div>
            </div>
            <div className="body">
                <h1 className="movie_title">{title}</h1>
                <img className="movie_image" src={baseURL + movie.poster_path}></img>
                <p className="movie_date">Release Date: {movie.release_date}</p>
                <p className="movie_description"><strong>{movie.overview}</strong></p>
            </div>
            <footer>
                <p>Made using <a href="https://developers.themoviedb.org/3/getting-started/introduction">The Movie Database</a></p>
                <p>Developed by Kyle Vinsand and Kushal Gupta</p>
        </footer>
            </React.Fragment>
        )
    } else {
        return(
            <React.Fragment>

            <div className="top">
            <a href="/"><img src='https://fontmeme.com/permalink/201213/ed9fb521c5ce730fca51654044a68288.png' alt="Movies2Watch"></img></a>
                <div className="searchbar">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search..." name="search"></input>
                    <input type="image" id="search-button" onClick={onSearch} src={process.env.PUBLIC_URL + '/search.png'} />
                </form>
                </div>
            </div>
            <div className="body">
                <h1 className="movie_title">{title}</h1>
                <img className="movie_image" src={unavailable}></img>
                <p className="movie_date">Release Date: {movie.release_date}</p>
                <p className="movie_description"><strong>{movie.overview}</strong></p>
            </div>
            <footer>
                <p>Made using <a href="https://developers.themoviedb.org/3/getting-started/introduction">The Movie Database</a></p>
                <p>Developed by Kyle Vinsand and Kushal Gupta</p>
            </footer>
            </React.Fragment>
        )
    }
}