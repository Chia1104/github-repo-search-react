import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setReposList, setMoreReposList } from "../redux/actions/ReposAction"
import RepoList from "../components/RepoList";
import NotFound from "../components/NotFound";
import LoadingRepoList from "../components/LoadingRepoList";

const HomePage = () => {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    const [moreRepos, setMoreRepos] = useState([]);
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setQuery(e.target.value)
        setPageNumber(1)
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

    const allRepos = useSelector((state) => state.repos.allRepos);
    const { loading } = useSelector((state) => state.repos.requestRepos);
    const { loadingMore } = useSelector((state) => state.repos.requestMoreRepos.loading);

    const handleScroll = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight;
        const currentHeight = Math.ceil(
            e.target.documentElement.scrollTop + window.innerHeight
        );
        if (currentHeight + 1 >= scrollHeight) {
            setPageNumber(pageNumber + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        console.log(pageNumber);
        getMoreRepoList();
    }, [pageNumber]);

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
