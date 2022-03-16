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

export const reposReducer = (
    state = {
        allRepos: [],
        moreRepos: [],
        requestRepos: {
            loading: false,
            error: null,
        },
        requestMoreRepos: {
            loading: false,
            error: null,
        },
    },
    action
) => {
    switch (action.type) {
        case SET_REPOS_LIST:
            return {
                ...state,
                allRepos: action.payload,
            };
        case SET_MORE_REPOS_LIST:
            return {
                ...state,
                allRepos: action.payload,
            };
        case BEGIN_REPOS_REQUEST:
            return {
                ...state,
                requestRepos: { ...state.requestRepos, loading: true },
            };
        case SUCCESS_REPOS_REQUEST:
            return {
                ...state,
                requestRepos: { ...state.requestRepos, loading: false },
            };
        case FAIL_REPOS_REQUEST:
            return {
                ...state,
                requestRepos: {
                    ...state.requestRepos,
                    loading: false,
                    error: action.payload,
                },
            };
        case BEGIN_MORE_REPOS_REQUEST:
            return {
                ...state,
                requestMoreRepos: { ...state.requestMoreRepos, loading: true },
            };
        case SUCCESS_MORE_REPOS_REQUEST:
            return {
                ...state,
                requestMoreRepos: { ...state.requestMoreRepos, loading: false },
            };
        case FAIL_MORE_REPOS_REQUEST:
            return {
                ...state,
                requestMoreRepos: {
                    ...state.requestMoreRepos,
                    loading: false,
                    error: action.payload,
                },
            };
        default:
            return state;
    }
};
