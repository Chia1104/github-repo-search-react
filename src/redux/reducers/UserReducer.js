import {
    SET_USER,
    BEGIN_USER_REQUEST,
    SUCCESS_USER_REQUEST,
    FAIL_USER_REQUEST,
} from "../../utils/constants";

export const userReducer = (
    state = {
        userData: [],
        requestUser: {
            loading: false,
            error: null,
        },
    },
    action
) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                userData: action.payload,
            };
        case BEGIN_USER_REQUEST:
            return {
                ...state,
                requestUser: { ...state.requestUser, loading: true },
            };
        case SUCCESS_USER_REQUEST:
            return {
                ...state,
                requestUser: { ...state.requestUser, loading: false },
            };
        case FAIL_USER_REQUEST:
            return {
                ...state,
                requestUser: {
                    ...state.requestUser,
                    loading: false,
                    error: action.payload,
                },
            };
        default:
            return state;
    }
};
