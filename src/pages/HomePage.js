import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setReposList, setMoreReposList } from "../redux/actions/ReposAction"
import RepoList from "../components/RepoList";
import NotFound from "../components/NotFound";
import LoadingRepoList from "../components/LoadingRepoList";

const HomePage = () => {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    const [allRepos, setAllRepos] = useState([])
    const dispatch = useDispatch();
    const prevRepos = useSelector((state) => state.repos.allRepos);
    const moreRepos = useSelector((state) => state.repos.moreRepos);
    const { loading } = useSelector((state) => state.repos.requestRepos);
    const loadingMore = useSelector((state) => state.repos.requestMoreRepos.loading);

    const handleSearch = (e) => {
        setQuery(e.target.value)
        setPageNumber(1)
    };

    const handleScroll = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight;
        const scrollTop = e.target.documentElement.scrollTop;
        const innerHeight = window.innerHeight;
        const currentHeight = Math.ceil(
            scrollTop + innerHeight
        );

        // console.log("ScrollHeight: " + scrollHeight);
        // console.log("ScrollTop: " + scrollTop);
        // console.log("InnerHeight: " + innerHeight);
        // console.log("CurrentHeight: " + currentHeight);

        if (currentHeight + 1 >= scrollHeight && loading !== true) {
            setPageNumber(pageNumber => pageNumber + 1);
        }
    };

    const getRepoList = async () => {
        try {
            dispatch(setReposList(query, pageNumber));
        } catch (e) {
            console.log("error", e);
        }
    };

    const getMoreRepoList = async () => {
        try {
            dispatch(setMoreReposList(query, pageNumber));
        } catch (e) {
            console.log("error", e);
        }
    };

    useEffect(() => {
        if (query !== '') {
            getRepoList()
        }
    }, [query]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // console.log(pageNumber);
        if (query !== '' && pageNumber !== 1) {
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
    }, [moreRepos]);

    return (
        <>
            <div className="flex justify-center my-5">
                <div className="w-[550px] flex self-center">
                    <input type="text" value={query} onChange={handleSearch} className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-3/4" placeholder="user's name"/>
                    <button
                        className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r w-1/4">Search
                    </button>
                </div>
            </div>
            {loading === true ? (
                <LoadingRepoList />
            ) : (
                allRepos.message === "Not Found" ? (
                    <NotFound />
                ) : (
                    allRepos.map((repo) => (
                        <RepoList repo={repo} key={repo.id}/>
                    ))
                )
            )}
            {loadingMore === true && (<LoadingRepoList />)}
        </>
    );
}

export default HomePage;
