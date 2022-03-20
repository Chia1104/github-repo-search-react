import ErrorAnimation from "../../components/animations/ErrorAnimation";
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="flex-col items-center">
                <ErrorAnimation />
                <div className="flex justify-center text-xl mt-5">
                    <p>Something went wrong<br /><Link to="/home"> You can go back here </Link></p>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;
