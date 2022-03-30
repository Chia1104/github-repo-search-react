import RepoDetail from "../components/RepoDetail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { setUser } from "../redux/actions/UserAction";
import { setRepoDetails } from "../redux/actions/ReposAction";
import { useParams } from "react-router-dom";
import ErrorPage from "./exceptions/ErrorPage";
import NotFoundPage from "./exceptions/NotFoundPage";
import { RESET_REPO_DETAILS_STATE } from "../utils/constants";
import LoadingRepoDetailAnimation from "../components/animations/LoadingRepoDetailAnimation";

const RepoDetailPage = () => {
    const repoDetails = useSelector((state) => state.repos.repoDetails);
    const { loading, error } = useSelector((state) => state.repos.requestRepoDetails);
    const userError = useSelector((state) => state.user.requestUser.error);
    const userData = useSelector((state) => state.user.userData);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch({ type: RESET_REPO_DETAILS_STATE });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getRepo = useCallback(() => {
        userData?.login?.toLowerCase() !== params?.userName?.toLowerCase() && dispatch(setUser(params.userName));
        dispatch(setRepoDetails(params.userName, params.repoName));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.userName, params.repoName])

    useEffect(() => {
        getRepo();
    }, [getRepo]);

    return (
        <main>
            {error === "error" || userError === "error" ? <ErrorPage /> : (
                error === "404error" || userError === "404error" ? <NotFoundPage /> : (
                    <div className="container w-screen m-auto">
                        <div className="mt-20">
                            {loading ? <LoadingRepoDetailAnimation />
                                : <RepoDetail details={repoDetails} />
                            }
                        </div>
                    </div>
                )
            )}
        </main>
    )
}

export default RepoDetailPage;
