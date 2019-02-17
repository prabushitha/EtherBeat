import { combineReducers } from 'redux';
import {BlockListReducer, SelectedBlockReducer} from './BlockReducers';

/*
* Once introduced a new reducer, add it into the reducer
*/
const reducer = combineReducers({
    BlockListReducer,
    SelectedBlockReducer
});

export default reducer;