import {Action} from './actions';

const initialState = {
    isWaiting: false,
    reviews: [],
    trendings: [],
    latests: [],
    rated: [],
    search: [],
    loadingTop: true,
    loadingTrending: true,
    loadingUpcoming: true,
    loadingSearch: true,
    loadingReviews: true,
};

function reducer(state = initialState, action){
    switch(action.type){
        case Action.LoadReviews:
            return {
                ...state,
                reviews: action.payload,
                loadingReviews: false,
            }
        case Action.LoadTrending:
            return {
                ...state,
                trendings: action.payload,
                loadingTrending: false,
            }
        case Action.LoadLatest:
            return{
                ...state,
                latests: action.payload,
                loadingUpcoming: false,
            }

        case Action.LoadTopRated:
            return {
                ...state,
                rated: action.payload,
                loadingTop:false,
            }   
            
        case Action.LoadSearch:
            return {
                ...state,
                search: action.payload,
                loadingSearch: false,
            }

        case Action.FinishAddingReview:
            return {
                ...state,
                reviews: [action.payload, ...state.reviews],
            }

        default:
            return state;
    }
}

export default reducer;