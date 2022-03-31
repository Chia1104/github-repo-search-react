import {Modal} from "@mui/material";
import RepoDetail from "./RepoDetail";
import {useState} from "react";

export const RepoDetailModal = (details) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <RepoDetail details={details}/>
        </Modal>
    )
}
