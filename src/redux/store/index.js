import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
    reposReducer,
} from "../reducers/ReposReducer";
import {
    userReducer,
} from "../reducers/UserReducer";


const initialState = {

};
const reducer = combineReducers({
    repos: reposReducer,
    user: userReducer,
});
const composeEnhancer = compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
