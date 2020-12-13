import React from 'react';

export function Review(props){
    const review = props.review;

    return (
        <div className="review">
            <div className="review-left">
                <span className="username">{review.username}</span>
                <span className="movie_name">{review.movie_name}</span>
                <span className="rating">{review.rating}</span>
                </div>
            <div className="review-right">
                <span className="message">{review.message}</span>
            </div>
        </div>
    );
}