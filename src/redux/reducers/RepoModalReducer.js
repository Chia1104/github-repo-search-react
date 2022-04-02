import {
    OPEN_REPO_DETAIL_MODAL,
    CLOSE_REPO_DETAIL_MODAL,
} from "../../utils/constants";

export const repoModalReducer = (
    state = {
        showUp: false
    },
    action
) => {
    switch (action.type) {
        case OPEN_REPO_DETAIL_MODAL:
            return {
                showUp: true,
            };
        case CLOSE_REPO_DETAIL_MODAL:
            return {
                showUp: false,
            };
        default:
            return state;
    }
};
