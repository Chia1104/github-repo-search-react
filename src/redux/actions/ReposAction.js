import {
    SET_REPOS_LIST,
    BEGIN_REPOS_REQUEST,
    SUCCESS_REPOS_REQUEST,
    FAIL_REPOS_REQUEST, HAS_MORE_REPO,
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
        allRepos.length < 10 ? (
            dispatch({
                type: HAS_MORE_REPO,
                hasMore: false,
            })
        ) : (
            dispatch({
                type: HAS_MORE_REPO,
                hasMore: true,
            })
        )
        dispatch({ type: SUCCESS_REPOS_REQUEST });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_REPOS_REQUEST, payload: "error" });
    }
};
