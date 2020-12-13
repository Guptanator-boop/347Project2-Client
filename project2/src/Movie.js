import React from 'react';

export function Movie(props) {
    const movie = props.movie;
    const baseURL = "https://image.tmdb.org/t/p/original";
    const unavailable = "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png";
    if(movie.poster_path) {
        return (
            <div className="movie">
                <img src={baseURL + movie.poster_path}></img>
                <p className="title">{movie.original_title}</p>
                <p className="vote"><strong>{movie.vote_average}</strong></p>
            </div> 
        );
    } else {
        return (
            <div className="movie">
                <img src={unavailable}></img>
                <p className="title">{movie.original_title}</p>
                <p className="vote"><strong>{movie.vote_average}</strong></p>
            </div> 
        );
    }
}