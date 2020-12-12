import {Action} from './actions';

const initialState = {
    isWaiting: false,
    reviews: [],
    movies: [],
};

function reducer(state = initialState, action){
    switch(action.type){
        case Action.LoadReviews:
            return {
                ...state,
                reviews: action.payload,
            }
        case Action.LoadTrending:
            return {
                ...state,
                 movies: action.payload,
            }

        default:
            return state;
    }
}

export default reducer;