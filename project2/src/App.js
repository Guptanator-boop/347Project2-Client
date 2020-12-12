import React, {useEffect} from 'react';
import './App.css';
import {Review} from './Review';
import {Movie} from './Movie';
import {useSelector, useDispatch} from 'react-redux';
import {loadReviews, loadTrending, search} from './actions';

function App() {
  const movies = useSelector(state => state.movies);
  //console.log(movies);
  const dispatch = useDispatch();
  // const onSearch = () => {
  //   dispatch(search('kush'));
  // }

  
   useEffect(() => {
     dispatch(loadTrending());
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
          <h2>Trending Movies</h2>
          <div className="trending">
            {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
          </div>
        </div>
        <div className="movies-display">
          <h2>Most Watched</h2>
          <div className="top-movies">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81ai6zx6eXL._AC_SL1304_.jpg"></img>
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
