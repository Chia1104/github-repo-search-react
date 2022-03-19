import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setReposList } from "../redux/actions/ReposAction"
import RepoList from "../components/RepoList";
import LoadingRepoListAnimation from "../components/animations/LoadingRepoListAnimation";
import Header from "../components/Header";
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
    const userData = useSelector((state) => state.user.userData);
    const { userName } = useParams;

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
        dispatch(setReposList(userData.login, pageNumber));
        window.addEventListener("scroll", handleScroll);
    }, []);

    // useEffect(() => {
    //
    // }, [userName]);

    //Get More Repo List
    useEffect(() => {
        if (pageNumber !== 1 && hasMore === true) dispatch(setReposList(userData.login, pageNumber));
    }, [pageNumber]);

    return (
        <>
            {error === "error" ? <ErrorPage /> : (
                userData.message === "Not Found" ? <NotFoundPage /> : (
                    <main>
                        <Header />
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
