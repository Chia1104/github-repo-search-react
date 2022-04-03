import {Modal} from "@mui/material";
import RepoDetail from "./RepoDetail";
import {useDispatch, useSelector} from "react-redux";
import {CLOSE_REPO_DETAIL_MODAL} from "../utils/constants";

export const RepoDetailModal = (details) => {
    const dispatch = useDispatch();
    const {showUp} = useSelector((state) => state.repoModal);

    const handleClose = () => {
        dispatch({ type: CLOSE_REPO_DETAIL_MODAL });
    };

    return (
        <Modal
            open={showUp || false}
            onClose={handleClose}
            className="container flex mx-auto justify-center items-center"
        >
            <RepoDetail details={details}/>
        </Modal>
    )
}
