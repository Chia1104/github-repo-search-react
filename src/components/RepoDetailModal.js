import {Modal} from "@mui/material";
import RepoDetail from "./RepoDetail";
import {useSelector} from "react-redux";
import LoadingRepoDetailAnimation from "./animations/LoadingRepoDetailAnimation";
import {useNavigate} from "react-router-dom";

export const RepoDetailModal = () => {
    const { showUp } = useSelector((state) => state.repoModal);
    const repoDetails = useSelector((state) => state.repos.repoDetails);
    const { loading } = useSelector((state) => state.repos.requestRepoDetails);
    const navigate = useNavigate();

    const handleClose = () => {
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
