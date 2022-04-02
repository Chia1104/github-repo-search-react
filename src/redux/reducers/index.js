import { combineReducers } from 'redux';
import {reposReducer} from "./ReposReducer";
import {userReducer} from "./UserReducer";
import {repoModalReducer} from "./RepoModalReducer";

export const reducer = combineReducers({
    repos: reposReducer,
    user: userReducer,
    repoModal: repoModalReducer
});
