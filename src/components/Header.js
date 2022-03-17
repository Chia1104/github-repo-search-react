import {Avatar} from "@mui/material";

const Header = ({ user }) => {
    return (
        <div className="w-screen flex h-[50px] items-center bg-white shadow-lg inset-x-0 top-0 fixed justify-center">
            <div className="flex container items-center">
                <Avatar alt="Chia1104" src="https://avatars.githubusercontent.com/u/38397958?v=4" className="mr-2"/>
                <h1>
                    Chia1104
                </h1>
            </div>
        </div>
    );
}

export default Header;
