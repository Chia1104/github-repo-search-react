import {
    SET_USER,
    BEGIN_USER_REQUEST,
    SUCCESS_USER_REQUEST,
    FAIL_USER_REQUEST,
} from "../../utils/constants";
import {
    getUser,
} from "../../api";

export const setUser = (userName) => async (dispatch) => {
    let userData = [];
    dispatch({ type: BEGIN_USER_REQUEST });
    try {
        userData = await getUser(userName);
        dispatch({
            type: SET_USER,
            payload: userData.data,
        });

        userData.status === 200 ? dispatch({ type: SUCCESS_USER_REQUEST })
            : userData.status === 404 ? dispatch({ type: FAIL_USER_REQUEST, payload: "404error" })
                : dispatch({ type: FAIL_USER_REQUEST, payload: "error" });
    } catch (error) {
        console.log(error);
        dispatch({ type: FAIL_USER_REQUEST, payload: "error" });
    }
};
