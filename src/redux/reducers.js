import { combineReducers } from 'redux';
import counterReducer from './reducers/counter';

const allReducers = {
    counterReducer: counterReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;