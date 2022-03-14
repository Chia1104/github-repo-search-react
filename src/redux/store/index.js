import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {
    reposReducer,
} from "../reducers/ReposReducer";


const initialState = {

};
const reducer = combineReducers({
    repos: reposReducer,
});
const composeEnhancer = compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
