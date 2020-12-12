import React from 'react';
import './App.css';
import {Review} from './Review'

function App() {
  return (
    <div className="App">
      <div class="banner">
        <h1>Movie2Watch.com</h1>
      </div>
      <div class="body">
        <form action="/action_page.php">
        <input type="text" placeholder="Movie name.." name="search"></input>
        <button type="submit">Search</button>
        </form>
        <div class="movies-display">
          <h2>Trending Movies</h2>
          <div class="trending">
          </div>
        </div>
        <div class="movies-display">
          <h2>Most Watched</h2>
          <div class="top">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
