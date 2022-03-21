import {
    SET_REPOS_LIST,
    BEGIN_REPOS_REQUEST,
    SUCCESS_REPOS_REQUEST,
    FAIL_REPOS_REQUEST,
    RESET_REPOS_STATE,
    HAS_MORE_REPO,
    SET_REPO_DETAILS,
    BEGIN_REPO_DETAILS_REQUEST,
    SUCCESS_REPO_DETAILS_REQUEST,
    FAIL_REPO_DETAILS_REQUEST,
    RESET_REPO_DETAILS_STATE
} from "../../utils/constants";

export const reposReducer = (
    state = {
        allRepos: [],
        repoDetails: [],
        hasMore: true,
        requestRepos: {
            loading: false,
            error: null,
        },
        requestRepoDetails: {
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
        case SET_REPO_DETAILS:
            return {
                ...state,
                repoDetails: action.payload,
            };
        case BEGIN_REPO_DETAILS_REQUEST:
            return {
                ...state,
                requestRepoDetails: { ...state.requestRepoDetails, loading: true },
            };
        case SUCCESS_REPO_DETAILS_REQUEST:
            return {
                ...state,
                requestRepoDetails: { ...state.requestRepoDetails, loading: false },
            };
        case FAIL_REPO_DETAILS_REQUEST:
            return {
                ...state,
                requestRepoDetails: {
                    ...state.requestRepoDetails,
                    loading: false,
                    error: action.payload,
                },
            };
        case RESET_REPO_DETAILS_STATE:
            return {
                repoDetails: [],
                requestRepoDetails: {
                    loading: false,
                    error: null,
                },
            };
        default:
            return state;
    }
};
