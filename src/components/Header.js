import {Avatar} from "@mui/material";
import { useSelector} from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import {Link, useNavigate} from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {HoverLabel} from "./HoverLabel";
import {useRef} from "react";

const Header = () => {
    const userData = useSelector((state) => state.user.userData);
    const { loading } = useSelector((state) => state.user.requestUser);
    const navigate = useNavigate();
    const userNameRef = useRef()

    return (
        <div className="w-screen flex h-[70px] items-center bg-white shadow-lg inset-x-0 top-0 fixed justify-center z-40">
            { loading ? (
                <div className="flex container items-center">
                    <Avatar className="mr-2 ml-7"/>
                    <Skeleton variant="text" className="w-20"/>
                </div>
            ) : (
                userData.login ? (
                    <div className="flex container w-[100%]">
                        <div className="flex items-center w-[87%]">
                            <button className="flex items-center justify-center rounded-full bg-gray-400 mr-5 w-7 h-7 hover:bg-[#FF9000] transition ease-in-out">
                                <ArrowBackIosNewIcon
                                    className="text-white"
                                    fontSize="medium"
                                    onClick={() => navigate(-1)}/>
                            </button>
                            <Avatar alt={userData.login} src={userData.avatar_url} className="mr-2"/>
                            <div className="relative w-[200px]">
                                <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                                    <h1 ref={userNameRef} className="hover:text-[#FF9000] transition ease-in-out">
                                        {userData.login}
                                    </h1>
                                </a>
                                <HoverLabel
                                    refTarget={userNameRef}
                                    text={"View on GitHub"}
                                />
                            </div>
                        </div>
                        <div className="md:flex items-center w-[13%] sm:hidden justify-center">
                            <Link to="/home" className="mr-2 hover:text-[#FF9000] transition ease-in-out"> Home </Link>
                            <h1 className="hover:text-[#FF9000] transition ease-in-out">
                                Feedback
                            </h1>
                        </div>
                    </div>
                ) : (
                    <div className="flex container items-center">
                        <h1>GitHub Repo Search</h1>
                    </div>
                )
            )}
        </div>
    );
}

export default Header;
