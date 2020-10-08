import { combineReducers } from 'redux';
import termsReducer from './termsReducer';

//If it is more that two reducers in future this will use to combine all in one place
export default combineReducers({
    terms: termsReducer
});
