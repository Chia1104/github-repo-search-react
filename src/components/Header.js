import {Avatar} from "@mui/material";
import { useSelector} from "react-redux";
import Skeleton from "@mui/material/Skeleton";

const Header = () => {
    const userData = useSelector((state) => state.user.userData);
    const { loading } = useSelector((state) => state.user.requestUser);

    return (
        <div className="w-screen flex h-[70px] items-center bg-white shadow-lg inset-x-0 top-0 fixed justify-center z-50">
            { loading ? (
                <div className="flex container items-center">
                    <Avatar className="mr-2"/>
                    <Skeleton variant="text" className="w-20"/>
                </div>
            ) : (
                userData.login ? (
                    <div className="flex container items-center">
                        <Avatar alt={userData.login} src={userData.avatar_url} className="mr-2"/>
                        <h1>
                            {userData.login}
                        </h1>
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
