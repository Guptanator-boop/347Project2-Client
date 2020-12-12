import React, {useEffect} from 'react';
import './App.css';
import {Review} from './Review';
import {Movie} from './Movie';
import {useSelector, useDispatch} from 'react-redux';
import {loadLatest, loadTrending, loadTopRated} from './actions';
import { findAllByDisplayValue } from '@testing-library/react';

function App() {
  const movies = useSelector(state => state.trendings);
  const latests = useSelector(state => state.latests);
  const rated = useSelector(state => state.rated);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTrending());
    dispatch(loadLatest());
    dispatch(loadTopRated());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="top">
        <h1>Movies 2 Watch</h1>
        <div className="searchbar">
          <form action="/action_page.php">
            <input type="text" placeholder="Movie name.." name="search"></input>
            <button type="submit"><img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"></img></button>
          </form>
        </div>
      </div>
      <div className="body">
        <div className="movies-display">
          <h2>Trending</h2>
          <div className="trending">
            {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
          </div>
        </div>
        <div className="movies-display">
          <h2>Top Rated</h2>
          <div className="trending">
          {rated.map(movie => <Movie key={movie.id} movie={movie} />)}
          </div>
        </div>
        <div className="movies-display">
          <h2>Latest Released</h2>
          <div className="trending">
          {latests.map(movie => <Movie key={movie.id} movie={movie} />)}
          </div>
        </div>
      </div>
      <footer>
          <p>Made using <a href="https://developers.themoviedb.org/3/getting-started/introduction">The Movie Database</a></p>
          <p>Developed by Kyle Vinsand and Kushal Gupta</p>
        </footer>
    </div>
  );
}

export default App;
