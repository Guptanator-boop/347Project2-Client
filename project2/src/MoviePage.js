import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Review} from './Review';
import {search, startAddingReview, startLoadingReviews} from './actions';
import {Link} from 'react-router-dom';

export function MoviePage(props) {
    var movie = props.movie;
    const rev = useSelector(state => state.reviews);
    console.log(rev);
    var seperate = [];
    if(rev[0] !== undefined)
        seperate = rev[0];
    const dispatch = useDispatch();
    const onSearch = () => {
        dispatch(search(document.getElementById('textbox').value));
      }

    const addReview = () => {
        dispatch(startAddingReview(document.getElementById('name').value, movie.original_title, document.getElementById('rating').value, document.getElementById('message').value));
        dispatch(startLoadingReviews(movie.original_title));
    }
    if(movie === undefined) {
        movie = JSON.parse(localStorage.getItem("movie"));
    } else {
        localStorage.setItem("movie", JSON.stringify(movie));
    }

    const title = movie.original_title;

    useEffect(() => {
        dispatch(startLoadingReviews(title));
    }, [dispatch, title]);

    const baseURL = "https://image.tmdb.org/t/p/original";
    const unavailable = "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png";
    if(movie.poster_path) {
        return (
            <React.Fragment>

            <div className="top">
            <a href="/"><img src='https://fontmeme.com/permalink/201213/ed9fb521c5ce730fca51654044a68288.png' alt="Movies2Watch"></img></a>
                <div className="searchbar">
                <form action="/action_page.php">
                    <input type="text" id="textbox" placeholder="Search..." name="search"></input>
                    <Link to={`/search/`}><input type="image" alt="search" id="search-button" onClick={onSearch} src={process.env.PUBLIC_URL + '/search.png'} /></Link>
                </form>
                </div>
            </div>
            <div className="body" id="movie-body">
                <div className="inner-body">
                    <h1 className="movie_title">{title}</h1>
                    <div className="movie-container">  
                        <div className="movie-info">
                            <div className="left-info">
                                <img className="movie_image" alt={movie.original_title} src={baseURL + movie.poster_path}></img>
                                <p className="movie_date">Release Date: {movie.release_date}</p>
                                <p className="movie_date">Average User Rating: {movie.vote_average}</p>
                            </div>
                            <div className="right-info">
                            <p className="movie_description"><strong>{movie.overview}</strong></p>
                        </div>
                    </div>
                    <div className="reviews">
                        <h1>User Reviews</h1>
                        <div className="review-list">
                            <form id="add-review">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name"></input>
                                <label htmlFor="rating">Rating (0-10):</label>
                                <input type="number" id="rating" name="rating" min="0" max="10"></input>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="Type your review.."></textarea>
                                <button type="button" onClick={addReview}>Create Review</button>
                            </form>
                            {seperate.map(review =><Review key={review.id} review={review}/>) }
                        </div>
                    </div>
                </div>
            </div>
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
                     <input type="text" id="textbox" placeholder="Search..." name="search"></input>
                     <Link to={`/search/`}><input type="image" alt="search" id="search-button" onClick={onSearch} src={process.env.PUBLIC_URL + '/search.png'} /></Link>
                 </form>
                 </div>
             </div>
             <div className="body" id="movie-body">
                 <div className="inner-body">
                     <h1 className="movie_title">{title}</h1>
                     <div className="movie-container">  
                         <div className="movie-info">
                             <div className="left-info">
                                 <img className="movie_image" alt={movie.original_title} src={unavailable}></img>
                                 <p className="movie_date">Release Date: {movie.release_date}</p>
                                 <p className="movie_date">Average User Rating: {movie.vote_average}</p>
                             </div>
                             <div className="right-info">
                             <p className="movie_description"><strong>{movie.overview}</strong></p>
                         </div>
                     </div>
                     <div className="reviews">
                         <h1>User Reviews</h1>
                         <div className="review-list">
                             <form id="add-review">
                                 <label htmlFor="name">Name:</label>
                                 <input type="text" id="name" name="name"></input>
                                 <label htmlFor="rating">Rating (0-10):</label>
                                 <input type="number" id="rating" name="rating" min="0" max="10"></input>
                                 <label htmlFor="message">Message</label>
                                 <textarea id="messageUn" name="message" placeholder="Type your review.."></textarea>
                                 <button type="button">Create Review</button>
                             </form>
                             {seperate.map(review =><Review key={review.id} review={review}/>) }
                         </div>
                     </div>
                 </div>
             </div>
         </div>
             <footer>
                 <p>Made using <a href="https://developers.themoviedb.org/3/getting-started/introduction">The Movie Database</a></p>
                 <p>Developed by Kyle Vinsand and Kushal Gupta</p>
         </footer>
             </React.Fragment>
        )
    }
}