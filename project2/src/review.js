import React from 'react';

export function Review(props){
    const review = props.review;

    return (
        <div className="review-item">
            <div className="review-left">
                <div className="review-name">Name: {review.username}</div>

                <div className="review-rating">Rating: {review.rating}</div>
            </div>
            <div className="review-right">
                <div className="review-message">{review.message}</div>
            </div>
        </div>
    );
}