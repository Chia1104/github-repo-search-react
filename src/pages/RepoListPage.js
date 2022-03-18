import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setReposList, setMoreReposList } from "../redux/actions/ReposAction"
import RepoList from "../components/RepoList";
import LoadingRepoListAnimation from "../components/animations/LoadingRepoListAnimation";
import Header from "../components/Header";
import NotFoundPage from "./exceptions/NotFoundPage";
import SpaceAnimation from "../components/animations/SpaceAnimation";

const RepoListPage = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const [allRepos, setAllRepos] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const dispatch = useDispatch();
    const prevRepos = useSelector((state) => state.repos.allRepos);
    const moreRepos = useSelector((state) => state.repos.moreRepos);
    const { loading } = useSelector((state) => state.repos.requestRepos);
    const loadingMore = useSelector((state) => state.repos.requestMoreRepos.loading);
    const userData = useSelector((state) => state.user.userData);
    const { userName } = useParams();

    const handleSearch = (e) => {
        setPageNumber(1)
        setHasMore(true)
    };

    const handleScroll = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight;
        const scrollTop = e.target.documentElement.scrollTop;
        const innerHeight = window.innerHeight;
        const currentHeight = Math.ceil(
            scrollTop + innerHeight
        );

        if (currentHeight + 1 >= scrollHeight && loading !== true && hasMore === true) {
            setPageNumber(pageNumber => pageNumber + 1);
        }
    };

    const getRepoList = async () => {
        handleSearch()
        try {
            dispatch(setReposList(userData.login, pageNumber));
        } catch (e) {
            console.log("error", e);
        }
    };

    const getMoreRepoList = async () => {
        try {
            dispatch(setMoreReposList(userData.login, pageNumber));
        } catch (e) {
            console.log("error", e);
        }
    };

    useEffect(() => {
        if (userData !== [] || userData.message !== "Not Found") {
            getRepoList()
        }
    }, [userData]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (pageNumber !== 1 && hasMore === true) {
            getMoreRepoList();
        }
    }, [pageNumber]);

    useEffect(() => {
        setAllRepos(prevRepos);
    }, [prevRepos]);

    useEffect(() => {
        if (moreRepos.length !== 0) {
            setAllRepos(allRepos => [...allRepos, ...moreRepos]);
        }
        if (moreRepos.length === 0 || allRepos.length < 10) {
            setHasMore(false)
        }
    }, [moreRepos]);

    return (
        <>
            {userData.message === "Not Found" ? <NotFoundPage />: (
                <main>
                    <Header />
                    <div className="mt-20">
                        {loading === true ? (
                            <LoadingRepoListAnimation />
                        ) : (
                            allRepos.length === 0 ? (
                                <SpaceAnimation />
                            ) : (
                                allRepos.map((repo) => (
                                    <RepoList repo={repo} key={repo.id}/>
                                ))
                            )
                        )}
                        {loadingMore === true && (<LoadingRepoListAnimation />)}
                    </div>
                </main>
            )}

        </>
    );
}

export default RepoListPage;
