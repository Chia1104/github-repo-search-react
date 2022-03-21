import RepoDetail from "../components/RepoDetail";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setUser} from "../redux/actions/UserAction";
import {setRepoDetails} from "../redux/actions/ReposAction";
import {useParams} from "react-router-dom";

const RepoDetailPage = () => {
    const repoDetails = useSelector((state) => state.repos.repoDetails);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(setUser(params.userName));
        dispatch(setRepoDetails(params.userName, params.repoName));
    }, [params.userName, params.repoName]);

    return(
        <main>
            <div className="container w-screen h-screen m-auto">
                <div className="mt-20">
                    <RepoDetail details={repoDetails} />
                </div>
            </div>
        </main>
    )

}

export default RepoDetailPage;
