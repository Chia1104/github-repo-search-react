import {Modal} from "@mui/material";
import RepoDetail from "./RepoDetail";
import {useDispatch, useSelector} from "react-redux";
import {CLOSE_REPO_DETAIL_MODAL} from "../utils/constants";
import LoadingRepoDetailAnimation from "./animations/LoadingRepoDetailAnimation";
import ErrorPage from "../pages/exceptions/ErrorPage";
import NotFoundPage from "../pages/exceptions/NotFoundPage";
import {useNavigate} from "react-router-dom";

export const RepoDetailModal = () => {
    const dispatch = useDispatch();
    const {showUp} = useSelector((state) => state.repoModal);
    const repoDetails = useSelector((state) => state.repos.repoDetails);
    const { loading} = useSelector((state) => state.repos.requestRepoDetails);
    const navigate = useNavigate();

    const handleClose = () => {
        // dispatch({ type: CLOSE_REPO_DETAIL_MODAL });
        navigate(-1);
    };

    return (
        <Modal
            open={showUp || false}
            onClose={handleClose}
            className="container flex mx-auto justify-center items-center"
        >
            {loading ? <LoadingRepoDetailAnimation />
                : <RepoDetail details={repoDetails} />
            }
        </Modal>
    )
}
