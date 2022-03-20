import NotFoundAnimation from "../../components/animations/NotFoundAnimation";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="flex-col items-center">
                <NotFoundAnimation />
                <div className="flex justify-center text-xl mt-5">
                    <p>There is nothing here<br /><Link to="/home"> You can go back here </Link></p>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;
