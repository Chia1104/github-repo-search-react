import {Avatar} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import {useParams} from "react-router-dom";
import { setUser } from "../redux/actions/UserAction"

const Header = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userData);
    const { loading } = useSelector((state) => state.user.requestUser);
    const { userName } = useParams();

    return (
        <div className="w-screen flex h-[70px] items-center bg-white shadow-lg inset-x-0 top-0 fixed justify-center">
            { loading ? (
                <div className="flex container items-center">
                    <Avatar className="mr-2"/>
                    <Skeleton variant="text" className="w-20"/>
                </div>
            ) : (
                userData ? (
                    <div className="flex container items-center">
                        <Avatar alt={userData.login} src={userData.avatar_url} className="mr-2"/>
                        <h1>
                            {userData.login}
                        </h1>
                    </div>
                ) : <h1>GitHub Repo Search</h1>
            )}
        </div>
    );
}

export default Header;
