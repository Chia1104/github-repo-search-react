import {Avatar} from "@mui/material";
import {useEffect, useState} from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const userData = useSelector((state) => state.user.userData);

    return (
        <div className="w-screen flex h-[70px] items-center bg-white shadow-lg inset-x-0 top-0 fixed justify-center">
            <div className="flex container items-center">
                {userData === undefined ? <></> : <Avatar alt="Chia1104" src={userData.avatar_url} className="mr-2"/>}
                <h1>
                    {userData === undefined ? "GitHub Repo Search" : userData.login}
                </h1>
            </div>
        </div>
    );
}

export default Header;
