import { combineReducers } from 'redux';
import {reposReducer} from "./ReposReducer";
import {userReducer} from "./UserReducer";

export const reducer = combineReducers({
    repos: reposReducer,
    user: userReducer,
});
