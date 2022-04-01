import {useHoverLabel} from "../hooks/useHoverLabel";
import {Fade} from "@mui/material";

export const HoverLabel = ({
    text,
    refTarget,
    left,
    top,
}) => {
    if (!refTarget) console.error("HoverLabel: refTarget is required");
    const hovered = useHoverLabel(refTarget)
    return (
        <Fade in={hovered}>
            <div
                className="bg-black/[0.65] px-2 py-1 rounded-full absolute z-50"
                style={{
                    left: left || "2.5rem",
                    top: top || "1.25rem",
                }}
            >
                <p
                    id="hoverLabel"
                    className="text-white text-sm">
                    {text || "Hover Label"}
                </p>
            </div>
        </Fade>
    )
}
