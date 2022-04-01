import {Modal} from "@mui/material";
import RepoDetail from "./RepoDetail";
import {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";

export const RepoDetailModal = (showUp, details) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        setOpen(showUp)
    }, [showUp])

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <RepoDetail details={details}/>
            </Modal>
            <Outlet />
        </>
    )
}
