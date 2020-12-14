import React, {useEffect} from 'react';
import './App.css';
import {Movie} from './Movie';
import {MoviePage} from './MoviePage';
import {Search} from './Search';
import {useSelector, useDispatch} from 'react-redux';
import {loadLatest, loadTrending, loadTopRated, search} from './actions';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'

function Loading(props){
  
  if(props.load){
    return (<Spinner className="loadingspin" animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>
    );
  } else {
    return null;
  }
}

function App() {
  const movies = useSelector(state => state.trendings);
  const latests = useSelector(state => state.latests);
  const rated = useSelector(state => state.rated);
  const s = useSelector(state => state.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTrending());
    dispatch(loadLatest());
    dispatch(loadTopRated());
  }, [dispatch]);
  const onSearch = () => {
    dispatch(search(document.getElementById('textbox').value));
  }
  const loadingTop = useSelector(state => state.loadingTop);
  const loadingTrending = useSelector(state => state.loadingTrending);
  const loadingUpcoming = useSelector(state => state.loadingUpcoming);
  return (
    
    <div className="App">
      <Switch>
      <Route exact path="/search">
        <Search search = {s}/>
      </Route>
      <Route exact path="/trending/:title" children={props => {
        const title = props.match.params.title;
        const movie = movies.find(m => m.original_title === title);
        return <MoviePage movie={movie} />;
      }} />
      <Route exact path="/toprated/:title" children={props => {
        const title = props.match.params.title;
        const movie = rated.find(m => m.original_title === title);
        return <MoviePage movie={movie} />;
      }} />
      <Route exact path="/upcoming/:title" children={props => {
        const title = props.match.params.title;
        const movie = latests.find(m => m.original_title === title);
        return <MoviePage movie={movie} />;
      }} />
      <Route exact path="/search/:title" children={props => {
        const title = props.match.params.title;
        const movie = s.find(m=> m.original_title === title);
        return <MoviePage movie={movie} />;
      }} />
      <Route to="" >



      <div className="top">
        <img src='https://fontmeme.com/permalink/201213/ed9fb521c5ce730fca51654044a68288.png' alt="Movies2Watch"></img>
        <div className="searchbar">
          <form action="/search">
            <input type="text" id="textbox" placeholder="Search..." name="search"></input>
            <Link to={`/search/`}><input type="image" alt="Picture of movie poster" id="search-button" onClick={onSearch} src={process.env.PUBLIC_URL + '/search.png'} /></Link>
          </form>
        </div>
      </div>
      <div className="body">

        <div className="movies-display">
          <h2>Trending</h2>
          <Loading load={loadingTrending} />
          <div className="movie-list">
            {movies.map(movie => <Link to={`/trending/${movie.original_title}`}><Movie key={movie.id} movie={movie} /></Link>)}
          </div>
        </div>
        <div className="movies-display">
          <h2>Top Rated</h2>
          <Loading load={loadingTop} />
          <div className="movie-list">
          {rated.map(movie => <Link to={`/toprated/${movie.original_title}`}><Movie key={movie.id} movie={movie} /></Link>)}
          </div>
        </div>
        <div className="movies-display">
          <h2>Upcoming</h2>
          <Loading load={loadingUpcoming} />
          <div className="movie-list">
          {latests.map(movie => <Link to={`/upcoming/${movie.original_title}`}><Movie key={movie.id} movie={movie} /></Link>)}          
          </div>
        </div>
      </div>
      <footer>
        <p>Made using <a href="https://developers.themoviedb.org/3/getting-started/introduction">The Movie Database</a></p>
        <p>Developed by Kyle Vinsand and Kushal Gupta</p>
      </footer>
        </Route>
        <Redirect to="" />
    </Switch>
    </div>
  );
}


export default App;
