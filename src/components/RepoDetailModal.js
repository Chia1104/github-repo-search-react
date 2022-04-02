import {Modal} from "@mui/material";
import RepoDetail from "./RepoDetail";
import {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CLOSE_REPO_DETAIL_MODAL} from "../utils/constants";

export const RepoDetailModal = (details) => {
    const dispatch = useDispatch();
    const {showUp} = useSelector((state) => state.repoModal.showUp);
    const [open, setOpen] = useState(showUp);

    const handleClose = () => {
        dispatch({ type: CLOSE_REPO_DETAIL_MODAL });
    };

    return (
        <>
            <Modal
                open={showUp}
                onClose={handleClose}
                className="container flex mx-auto justify-center items-center"
            >
                <RepoDetail details={details}/>
            </Modal>
        </>
    )
}
