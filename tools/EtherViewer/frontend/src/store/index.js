import {applyMiddleware, createStore} from "redux";
import {createLogger} from 'redux-logger';

//1. create middleware
const middleware = applyMiddleware(createLogger());

//2. create reducer OR reducers(using combineReducers)
const initialState = {
    toggled:false
};
const reducer =  (state=initialState, action)=>{
    switch (action.type){
        case 'TOGGLE':
            return {toggled:!state.toggled};
        default:
            return state;
    }
};

//3. create store
const store = createStore(reducer,middleware);

export default store;