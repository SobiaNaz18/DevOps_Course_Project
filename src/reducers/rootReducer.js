import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import paginationReducer from './paginationReducer';

export default combineReducers({
    users: usersReducer,
    pagination: paginationReducer
});