import loadable from '@loadable/component'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState, useEffect, useCallback} from "react";
import {RESET_USER_STATE} from "../utils/constants";

const SpaceAnimation = loadable(() => import('../components/animations/SpaceAnimation'))
const Alert = loadable(() => import('@mui/material/Alert'))
const Fade = loadable(() => import('@mui/material/Fade'))

const HomePage = () => {
    //Local state
    const state = {
        query: '',
        warning: false
    };
    const [{ query, warning }, setState] = useState(state)
    const clearState = () => {
        setState({...state});
    };

    //React router
    const navigate = useNavigate();
    //Redux
    const dispatch = useDispatch();

    //Set input value to local state
    const handleSearch = useCallback((e) => {
        const { value } = e.target;
        setState({ ...state, query: value })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    //Reset all state
    useEffect(() => {
        dispatch({ type: RESET_USER_STATE });
        return () => {
            clearState();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="flex flex-col items-center">
                <div className="flex md:w-[500px] mx-auto sm:w-[340px] relative">
                    <input type="text" value={query} onChange={handleSearch} className="rounded-full p-4 text-gray-800 border-gray-200 bg-white w-[100%] text-sm z-10 focus:outline-none" placeholder="user's name"/>
                    <button
                        className="px-4 rounded-full bg-[#2B2E4A] text-white font-bold p-4 w-[100px] text-sm z-20 shadow-inner right-0 top-0 absolute hover:bg-[#FF9000] transition ease-in-out"
                        onClick={()=> {
                            query !== '' ? navigate(`/users/${query}/repos`) : setState({ ...state, warning: true });
                        }}>
                        Search
                    </button>
                </div>
                <SpaceAnimation />
                <Fade in={warning}><Alert severity="warning" className="bottom-10 fixed transition-opacity md:w-[500px] mx-auto sm:w-[340px]">Search input can't be empty</Alert></Fade>
            </div>
        </div>
    );
}

export default HomePage;
