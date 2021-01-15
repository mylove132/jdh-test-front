import { SET_THEME_STYLE, THEME_LIST } from "@/common/contants";
import { ITheme, THEME_STYLE } from "@/common/types/theme";

export interface IUseLocalStorage {
    setThemeList: (themes: ITheme[]) => void;
    getThemeList: () => ITheme[];
}

/**
 * 操作localstorage
 */
function userLocalStorage(): IUseLocalStorage {

    function setThemeStyle(themeStyle: THEME_STYLE): void {
        localStorage.setItem(SET_THEME_STYLE, themeStyle);
    }

    function setThemeList(themes: ITheme[]): void {
        localStorage.setItem(THEME_LIST, JSON.stringify(themes));
    }

    function getThemeList(): ITheme[] {
        return JSON.parse(localStorage.getItem(THEME_LIST) || "[]");
    }

    return {
        setThemeList,
        getThemeList
    }
}

export default userLocalStorage;
