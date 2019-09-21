import moviesReducer from './moviesReducer'
import {combineReducers} from 'redux';

const allReducers =combineReducers({
    movies:moviesReducer,
});
export default allReducers;