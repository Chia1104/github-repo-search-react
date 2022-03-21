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
    const [pageNumber, setPageNumber] = useState(1)
    const dispatch = useDispatch();
    const allRepos = useSelector((state) => state.repos.allRepos);
    const hasMore = useSelector((state) => state.repos.hasMore);
    const { loading, error } = useSelector((state) => state.repos.requestRepos);
    const userError = useSelector((state) => state.user.requestUser.error);
    const params = useParams();

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
        setPageNumber(1);
        window.addEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        dispatch(setUser(params.userName));
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
