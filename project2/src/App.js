import React from 'react';
import './App.css';
import {Review} from './Review'

function App() {
  return (
    <div className="App">
      <div class="top">
        <h1>Movies 2 Watch</h1>
        <div class="searchbar">
          <form action="/action_page.php">
            <input type="text" placeholder="Movie name.." name="search"></input>
            <button type="submit"><img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"></img></button>
          </form>
        </div>
      </div>
      <div class="body">
        <div class="movies-display">
          <h2>Trending Movies</h2>
          <div class="trending">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71NPmBOdq7L._AC_SL1333_.jpg"></img>
          </div>
        </div>
        <div class="movies-display">
          <h2>Most Watched</h2>
          <div class="top-movies">
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
