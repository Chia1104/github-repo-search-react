import { useState } from "react"
import {useEventListener} from "./useEventListener"

export const useHoverLabel = (ref) => {
    const [hovered, setHovered] = useState(false)

    useEventListener("mouseover", () => setHovered(true), ref.current)
    useEventListener("mouseout", () => setHovered(false), ref.current)

    return hovered
}
