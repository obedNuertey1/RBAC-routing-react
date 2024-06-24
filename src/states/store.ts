import { createStore, combineReducers } from "redux";

const initialState = {
    auth: {
        role: 'user', // initial role, could be 'admin', 'user', etc.
        // other auth state like is Authenticated, user details, etc.
    }
};


const authReducer = (state = initialState.auth, action:any)=>{
    switch(action.type){
        case 'SET_ROLE':
            return {
                ...state,
                role: action.payload
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    auth: authReducer,
    // other reducers
});

const store = createStore(rootReducer);

export default store;