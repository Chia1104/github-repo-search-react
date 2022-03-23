import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
    reducer,
} from "../reducers";

const composeEnhancer = compose;
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
