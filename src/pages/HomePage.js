import SpaceAnimation from "../components/animations/SpaceAnimation";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {setUser} from "../redux/actions/UserAction";
import Alert from '@mui/material/Alert';

const HomePage = () => {
    const [query, setQuery] = useState('')
    const [warning, setWarning] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userData);
    const params = useParams();

    const handleSearch = (e) => {
        setQuery(e.target.value)
    };

    useEffect(() => {
        if (userData.length !== 0 && query !== '' && params.userName !== '') navigate(`/users/${query}/repos`)
    }, [userData]);

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="flex-col items-center">
                <div className="md:w-[540px] mx-auto sm:w-[450px]">
                    <input type="text" value={query} onChange={handleSearch} className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-3/4" placeholder="user's name"/>
                    <button
                        className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r w-1/4"
                        onClick={()=> {
                            if (query !== '') {
                                dispatch(setUser(query));
                            } else {
                                setWarning(true);
                            }
                        }}>
                        Search
                    </button>
                </div>
                <SpaceAnimation />
                {warning && (
                    <Alert severity="warning" className="bottom-10 fixed transition-opacity w-[550px] mx-auto">Search input can't be empty</Alert>
                )}
            </div>
        </div>
    );
}

export default HomePage;
