import loadable from '@loadable/component'
import { useEffect, useLayoutEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { goToNextPage, setReposList } from "../redux/actions/ReposAction"
import RepoList from "../components/RepoList";
import LoadingRepoListAnimation from "../components/animations/LoadingRepoListAnimation";
import { RESET_REPOS_STATE } from "../utils/constants";
import { setUser } from "../redux/actions/UserAction";

const SpaceAnimation = loadable(() => import('../components/animations/SpaceAnimation'))
const NotFoundPage = loadable(() => import('./exceptions/NotFoundPage'))
const ErrorPage = loadable(() => import('./exceptions/ErrorPage'))

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

    //Detect scroll to bottom, and use IntersectionObserver
    const observer = useRef()
    const lastRepoRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) dispatch(goToNextPage);
        },
            {
                rootMargin: "50px"
            })
        if (node) observer.current.observe(node)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, hasMore])

    useEffect(() => {
        // console.log("reset state")
        return () => {
            dispatch({ type: RESET_REPOS_STATE });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //First set user data, and repo data from redux state
    const getRepo = useCallback(() => {
        userData?.login?.toLowerCase() !== params?.userName?.toLowerCase() && dispatch(setUser(params.userName));
        dispatch(setReposList(params.userName, pageNumber));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.userName])
    useLayoutEffect(() => {
        // console.log("first load")
        getRepo();
    }, [getRepo]);

    //Get More Repo List
    const getMoreRepo = useCallback(() => {
        if (pageNumber !== 1 && hasMore) dispatch(setReposList(params.userName, pageNumber));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber])
    useEffect(() => {
        // console.log("load more")
        getMoreRepo()
    }, [getMoreRepo]);

    return (
        <main>
            {error === "error" || userError === "error" ? <ErrorPage /> : (
                error === "404error" || userError === "404error" ? <NotFoundPage /> : (
                    <div className="mt-20">
                        {allRepos.length === 0 && loading === false ? (
                            <SpaceAnimation />
                        ) : (
                            allRepos.map((repo, index) => {
                                if (allRepos.length === index + 1) return <RepoList repo={repo} ref={lastRepoRef} key={repo.id}/>
                                else return <RepoList repo={repo} key={repo.id}/>
                            })
                        )}
                        {loading && <LoadingRepoListAnimation />}
                    </div>
                )
            )}
        </main>
    );
}

export default RepoListPage;
