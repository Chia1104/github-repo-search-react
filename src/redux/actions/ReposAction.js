import {
    SET_REPOS_LIST,
    SET_MORE_REPOS_LIST,
    BEGIN_REPOS_REQUEST,
    SUCCESS_REPOS_REQUEST,
    FAIL_REPOS_REQUEST,
    BEGIN_MORE_REPOS_REQUEST,
    SUCCESS_MORE_REPOS_REQUEST,
    FAIL_MORE_REPOS_REQUEST,
} from "../../utils/constants";
import {
    getAllRepos,
} from "../../api";

export const setReposList = (user, page) => async (dispatch) => {
    let allRepos = [];
    dispatch({ type: BEGIN_REPOS_REQUEST });
    try {
        allRepos = await getAllRepos(user, page);
        dispatch({
            type: SET_REPOS_LIST,
            payload: allRepos,
        });
        dispatch({ type: SUCCESS_REPOS_REQUEST });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_REPOS_REQUEST, payload: error });
    }
};

export const setMoreReposList = (user, page) => async (dispatch) => {
    let moreRepos = [];
    dispatch({ type: BEGIN_MORE_REPOS_REQUEST });
    try {
        moreRepos = await getAllRepos(user, page);
        dispatch({
            type: SET_MORE_REPOS_LIST,
            payload: moreRepos,
        });
        dispatch({ type: SUCCESS_MORE_REPOS_REQUEST });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_MORE_REPOS_REQUEST, payload: error });
    }
};
