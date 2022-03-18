import {
    SET_REPOS_LIST,
    BEGIN_REPOS_REQUEST,
    SUCCESS_REPOS_REQUEST,
    FAIL_REPOS_REQUEST,
    RESET_REPOS_STATE,
    HAS_MORE_REPO,
} from "../../utils/constants";

export const reposReducer = (
    state = {
        allRepos: [],
        hasMore: true,
        requestRepos: {
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
                allRepos: [...state.allRepos, ...action.payload],
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
        case HAS_MORE_REPO:
            return {
                ...state,
                hasMore: action.hasMore,
                requestRepos: {
                    ...state.requestRepos,
                },
            };
        case RESET_REPOS_STATE:
            return {
                allRepos: [],
                hasMore: true,
                requestRepos: {
                    loading: false,
                    error: null,
                },
            };
        default:
            return state;
    }
};
