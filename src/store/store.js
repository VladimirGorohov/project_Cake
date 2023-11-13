import {legacy_createStore as createStore, combineReducers} from 'redux';
import {cashReducer} from './cashReducer.js';
import {customerReducer} from './customerReducer.js';

const rootReducer = combineReducers( {
    cashReducer,customerReducer
  
}
)

const store = createStore(rootReducer);

export default store;