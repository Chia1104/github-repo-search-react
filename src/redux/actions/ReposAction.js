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

        if (allRepos.status === 200) {
            dispatch({
                type: SET_REPOS_LIST,
                payload: allRepos.data,
            });
            allRepos.data.length < 10 && dispatch({ type: HAS_MORE_REPO, hasMore: false });
            dispatch({ type: SUCCESS_REPOS_REQUEST });
        } else if (allRepos.status === 404) dispatch({ type: FAIL_REPOS_REQUEST, payload: "404error" });
        else dispatch({ type: FAIL_REPOS_REQUEST, payload: "error" });

    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_REPOS_REQUEST, payload: "error" });
    }
};
