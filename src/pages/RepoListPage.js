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

const RepoListPage = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const dispatch = useDispatch();
    const allRepos = useSelector((state) => state.repos.allRepos);
    const hasMore = useSelector((state) => state.repos.hasMore);
    const { loading, error } = useSelector((state) => state.repos.requestRepos);
    const userData = useSelector((state) => state.user.userData);
    const userError = useSelector((state) => state.user.requestUser.error);

    const initialState = () => {
        setPageNumber(1)
    };

    const getRepoList = async () => {
        try {
            dispatch(setReposList(userData.login, pageNumber));
        } catch (e) {
            console.log("error", e);
        }
    };

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
        initialState();
        if (userData !== [] || userData.message !== "Not Found") {
            getRepoList()
        }
    }, [userData]);

    useEffect(() => {
        if (pageNumber !== 1 && hasMore === true) {
            getRepoList();
        }
    }, [pageNumber]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {error === "error" || userError === "error" ? <ErrorPage /> : (
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
                            {loading === true && (<LoadingRepoListAnimation />)}
                        </div>
                    </main>
                )
            )}
        </>
    );
}

export default RepoListPage;
