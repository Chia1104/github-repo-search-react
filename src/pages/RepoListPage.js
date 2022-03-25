import {useEffect, useLayoutEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {goToNextPage, setReposList} from "../redux/actions/ReposAction"
import RepoList from "../components/RepoList";
import LoadingRepoListAnimation from "../components/animations/LoadingRepoListAnimation";
import NotFoundPage from "./exceptions/NotFoundPage";
import SpaceAnimation from "../components/animations/SpaceAnimation";
import {RESET_REPOS_STATE} from "../utils/constants";
import ErrorPage from "./exceptions/ErrorPage";
import {setUser} from "../redux/actions/UserAction";

const RepoListPage = () => {
    //Redux state
    const dispatch = useDispatch();
    const allRepos = useSelector((state) => state.repos.allRepos);
    const hasMore = useSelector((state) => state.repos.hasMore);
    const pageNumber = useSelector((state) => state.repos.pageNumber);
    const { loading, error } = useSelector((state) => state.repos.requestRepos);
    const userError = useSelector((state) => state.user.requestUser.error);
    const userData = useSelector((state) => state.user.userData);

    //React router URL params
    const params = useParams();

    //Detect scroll to bottom, and set pageNumber ++ to local state
    const handleScroll = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight;
        const scrollTop = e.target.documentElement.scrollTop;
        const innerHeight = window.innerHeight;
        const currentHeight = Math.ceil(
            scrollTop + innerHeight
        );
        if (currentHeight + 1 >= scrollHeight && loading !== true && hasMore === true) {
            dispatch(goToNextPage);
        }
    };

    // const getRepoList = useCallback(() => {
    //     userData?.login?.toLowerCase() !== params?.userName?.toLowerCase() && 
    //     dispatch(setUser(params.userName)) && 
    //     dispatch({ type: RESET_REPOS_STATE }) && 
    //     dispatch(setReposList(params.userName, pageNumber));
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [params.userName])
    
    // useEffect(() => {
    //     getRepoList()
    // }, [getRepoList])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            dispatch({ type: RESET_REPOS_STATE });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //First set user data, and repo data from redux state
    useLayoutEffect(() => {
        userData?.login?.toLowerCase() !== params?.userName?.toLowerCase() && dispatch(setUser(params.userName));
        dispatch(setReposList(params.userName, pageNumber));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.userName]);

    //Get More Repo List
    useEffect(() => {
        if (pageNumber !== 1 && hasMore === true) dispatch(setReposList(params.userName, pageNumber));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber]);

    return (
        <>
            {error === "error" || userError === "error"? <ErrorPage /> : (
                error === "404error" || userError === "404error"? <NotFoundPage /> : (
                    <main>
                        <div className="mt-20">
                            {allRepos.length === 0 && loading === false ? (
                                <SpaceAnimation />
                            ) : (
                                allRepos.map((repo) => (
                                    <RepoList repo={repo} key={repo.id}/>
                                ))
                            )}
                            {loading && (<LoadingRepoListAnimation />)}
                        </div>
                    </main>
                )
            )}
        </>
    );
}

export default RepoListPage;
