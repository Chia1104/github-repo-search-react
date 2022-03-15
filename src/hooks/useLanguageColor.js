import {
    getLanguageColor,
} from "../api";

export const useLanguageColor = async (language) => {
    let res = [];
    try {
        res = await getLanguageColor();
        return res.colors[language].color
    } catch (error) {
        console.log(error);
    }
}
