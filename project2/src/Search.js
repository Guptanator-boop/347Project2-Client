import  React from 'react';
import './Search.css';
import {useDispatch} from 'react-redux';
import {search} from './actions';
import {Link} from 'react-router-dom';
import {Movie} from './Movie';


export function Search(props) {
    const dispatch = useDispatch();
    var searc = props.search;
    const onSearch = () => {
        dispatch(search(document.getElementById('textbox').value));
      }
      if(searc === undefined) {
        searc = JSON.parse(localStorage.getItem("search"));
    } else {
        localStorage.setItem("search", JSON.stringify(searc));
    }
    return (
        <div className="searchResults">
            <div className="top">
                <a href="/"><img src='https://fontmeme.com/permalink/201213/ed9fb521c5ce730fca51654044a68288.png' alt="Movies2Watch"></img></a>
                <div className="searchbar">
                    <form action="/search">
                        <input type="text" id='textbox' placeholder="Search..." name="search"></input>
                        <Link to={`/search/`}><input type="image" alt="search" id="search-button" onClick={onSearch} src={process.env.PUBLIC_URL + '/search.png'} /></Link>
                    </form>
                </div>
            </div>
            <div className="body">
                <h1 id="search-title">Search Results</h1>
                <div className="search-list">
                {searc.map(movie => <Link to={`/search/${movie.original_title}`}><Movie key={movie.id} movie={movie} /></Link>)}
                </div>
            </div>
            <footer id="search-footer">
                <p>Made using <a href="https://developers.themoviedb.org/3/getting-started/introduction">The Movie Database</a></p>
                <p>Developed by Kyle Vinsand and Kushal Gupta</p>
            </footer>
        </div>
    );
}