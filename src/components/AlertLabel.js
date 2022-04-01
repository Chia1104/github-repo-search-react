import {Alert, Fade} from "@mui/material";

export const AlertLabel = ({severity, text, showUp}) => {
    return (
        <Fade in={showUp || false}>
            <Alert
                id="alertLabel"
                severity={severity || "warning"}
                className="bottom-10 md:right-10 fixed md:w-[500px] sm:w-[300px] sm:m-auto">
                {text || "ALERT"}
            </Alert>
        </Fade>
    )
}
