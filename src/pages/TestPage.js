import {RepoDetailModal} from "../components/RepoDetailModal";
import {useCallback, useEffect, useState} from "react";
import {setRepoDetails} from "../redux/actions/ReposAction";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {OPEN_REPO_DETAIL_MODAL} from "../utils/constants";

const TestPage = () => {
    const repoDetails = useSelector((state) => state.repos.repoDetails);
    const { loading, error } = useSelector((state) => state.repos.requestRepoDetails);
    const dispatch = useDispatch();
    const params = useParams();

    const getRepo = useCallback(() => {
        params.repoName && dispatch(setRepoDetails(params.userName, params.repoName));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.repoName])

    useEffect(() => {
        getRepo();
    }, [getRepo]);

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
