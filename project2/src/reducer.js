import {Action} from './actions';

const initialState = {
    isWaiting: false,
    reviews: [],
    trendings: [],
    latests: [],
    rated: [],
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
                trendings: action.payload,
            }
        case Action.LoadLatest:
            return{
                ...state,
                latests: action.payload,
            }

        case Action.LoadTopRated:
            return {
                ...state,
                rated: action.payload,
            }    

        default:
            return state;
    }
}

export default reducer;