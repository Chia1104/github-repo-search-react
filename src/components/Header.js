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

    useEffect(() => {
        if (userData.length === 0) {
            dispatch(setUser(userName));
        }
    }, []);

    return (
        <div className="w-screen flex h-[70px] items-center bg-white shadow-lg inset-x-0 top-0 fixed justify-center">
            { loading === true ? (
                <div className="flex container items-center">
                    <Avatar className="mr-2"/>
                    <Skeleton variant="text" className="w-20"/>
                </div>
            ) : (
                userData.length === 0 ? (<h1>GitHub Repo Search</h1>) : (
                    <div className="flex container items-center">
                        <Avatar alt={userData.login} src={userData.avatar_url} className="mr-2"/>
                        <h1>
                            {userData.login}
                        </h1>
                    </div>
                )
            )}
        </div>
    );
}

export default Header;
