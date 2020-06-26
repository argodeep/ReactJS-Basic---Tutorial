import { combineReducers } from 'redux';
import { contacts } from './api';
import { isSorted } from './sort';


const allReducers = combineReducers({
    contacts, isSorted
});
export default allReducers;