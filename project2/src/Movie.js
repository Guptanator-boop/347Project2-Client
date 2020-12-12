import React from 'react';

export function Movie(props){
console.log("Creating movie objects");
const movie = props.movie;
const baseURL = "https://image.tmdb.org/t/p/original";
console.log(props);
    return (
        <div className="movie">
            <img src={baseURL + movie.poster_path}></img>
        </div> 
    );
}