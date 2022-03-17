import ErrorAnimation from "../../components/animations/ErrorAnimation";
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="flex-col items-center">
                <ErrorAnimation />
                <div className="flex justify-center text-xl mt-5">
                    <Link to="/"> You can go back here </Link>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;
