import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setReposList } from "../redux/actions/ReposAction"
import RepoList from "../components/RepoList";
import LoadingRepoListAnimation from "../components/animations/LoadingRepoListAnimation";
import NotFoundPage from "./exceptions/NotFoundPage";
import SpaceAnimation from "../components/animations/SpaceAnimation";
import {RESET_REPOS_STATE} from "../utils/constants";
import ErrorPage from "./exceptions/ErrorPage";
import {setUser} from "../redux/actions/UserAction";

const RepoListPage = () => {
    //Local state
    const [pageNumber, setPageNumber] = useState(1)

    //Redux state
    const dispatch = useDispatch();
    const allRepos = useSelector((state) => state.repos.allRepos);
    const hasMore = useSelector((state) => state.repos.hasMore);
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
            setPageNumber(pageNumber => pageNumber + 1)
        }
    };

    useEffect(() => {
        dispatch({ type: RESET_REPOS_STATE });
        window.addEventListener("scroll", handleScroll);
        return () => {
            setPageNumber(1);
        };
    }, []);

    //First set user data, and repo data from redux state
    useEffect(() => {
        userData?.login?.toLowerCase() !== params?.userName?.toLowerCase() && dispatch(setUser(params.userName));
        dispatch(setReposList(params.userName, pageNumber));
    }, [params.userName]);

    //Get More Repo List
    useEffect(() => {
        if (pageNumber !== 1 && hasMore === true) dispatch(setReposList(params.userName, pageNumber));
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
