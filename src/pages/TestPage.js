import {RepoDetailModal} from "../components/RepoDetailModal";
import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {OPEN_REPO_DETAIL_MODAL} from "../utils/constants";

const TestPage = () => {
    const dispatch = useDispatch();

    return (
        <div className="mt-20">
            <h1>Test Page</h1>
            <p>This is a test page</p>
            <button onClick={() => {
                dispatch({ type: OPEN_REPO_DETAIL_MODAL });
            }}>
                Open Modal
            </button>
            <RepoDetailModal />
        </div>
    );
};

export default TestPage;
