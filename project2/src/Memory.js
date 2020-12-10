import React from 'react';

export function Memory(props){
    const memory = props.memory;

    return (
        <div className="memory">
            <div className="memory-left">
                <span className="username">{memory.username}</span>
                <span className="movie_name">{memory.movie_name}</span>
                </div>
            <div className="memory-right">
                <span className="rating">{memory.rating}</span>
                <span className="message">{memory.message}</span>
            </div>
        </div>
    );
}