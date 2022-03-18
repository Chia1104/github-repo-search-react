import SpaceAnimation from "../components/animations/SpaceAnimation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useState, useEffect} from "react";
import {setUser} from "../redux/actions/UserAction";
import Alert from '@mui/material/Alert';

const HomePage = () => {
    const [query, setQuery] = useState('')
    const [warning, setWarning] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setQuery(e.target.value)
    };

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="flex-col items-center">
                <div className="w-[550px] mx-auto">
                    <input type="text" value={query} onChange={handleSearch} className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-3/4" placeholder="user's name"/>
                    <button
                        className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r w-1/4"
                        onClick={()=> {
                            if (query !== '') {
                                navigate(`/users/${query}/repos`)
                                dispatch(setUser(query));
                            } else {
                                setWarning(true);
                            }
                        }}>
                        Search
                    </button>
                </div>
                {warning === true && (
                    <Alert severity="warning" className="transition-opacity">Search input can't be empty</Alert>
                )}
            </div>
        </div>
    );
}

export default HomePage;
