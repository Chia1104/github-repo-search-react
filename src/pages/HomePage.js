import React, {useState, useRef, useCallback, useContext, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setReposList } from "../redux/actions/ReposAction"
import RepoList from "../components/RepoList";

const HomePage = () => {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
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

    useEffect(() => {
        getRepoList();
    }, [query, pageNumber]);

    const allRepos = useSelector((state) => state.repos.allRepos);

    return (
        <>
            <div className="w-96">
                <input type="text" value={query} onChange={handleSearch} className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-3/4" placeholder="user's name"/>
                <button
                    className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r w-1/4">Search
                </button>
            </div>
            <div className="flex justify-center mt-4">
                <RepoList />
            </div>
            <div>Loading...</div>
        </>
    );
}

export default HomePage;
