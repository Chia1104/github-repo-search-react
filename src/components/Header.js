import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { HoverLabel } from "./HoverLabel";
import { useRef } from "react";

const Header = () => {
    const userData = useSelector((state) => state.user.userData);
    const { loading } = useSelector((state) => state.user.requestUser);
    const navigate = useNavigate();
    const userNameRef = useRef()

    return (
        <div className="w-screen flex h-[70px] items-center bg-white shadow-lg inset-x-0 top-0 fixed justify-center z-40">
            <div className="flex container w-[100%]">
                <div className="flex items-center w-[87%]">
                    <button
                        name="back"
                        className="flex items-center justify-center rounded-full bg-gray-400 mr-5 w-7 h-7 hover:bg-[#FF9000] transition ease-in-out"
                        onClick={() => navigate(-1)}>
                        <ArrowBackIosNewIcon
                            className="text-white"
                            fontSize="medium"/>
                    </button>
                    <Avatar alt={userData.login || "avatar"} src={userData.avatar_url || null} className="mr-2" />
                    {loading ? <div className="bg-gray-200 w-20 animate-pulse h-3 rounded-2xl" /> : (
                        userData.login ? (
                            <div className="relative w-[200px]">
                                <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                                    <h1 id="mainTitle" ref={userNameRef} className="hover:text-[#FF9000] transition ease-in-out">
                                        {userData.login}
                                    </h1>
                                </a>
                                <HoverLabel
                                    refTarget={userNameRef}
                                    text={"View on GitHub"}
                                />
                            </div>
                        ) : <h1 id="mainTitle">GitHub Repo Search</h1>
                    )}
                </div>
                <div className="md:flex items-center w-[13%] sm:hidden justify-center">
                    <Link
                        id="homeBtn"
                        to="/home"
                        className="mr-2 hover:text-[#FF9000] transition ease-in-out">
                        Home
                    </Link>
                    <a href="https://github.com/Chia1104/github-repo-search-react/issues"
                       className="hover:text-[#FF9000] transition ease-in-out"
                       rel="noopener noreferrer"
                       target="_blank">
                        Feedback
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
