import { Color } from "@/common/contants";
import { IThemeStyle } from "@/common/types/common";
import { ITheme, THEME_STYLE } from "@/common/types/theme";
import { store } from "@/store";
import { ADD_THEME, SET_THEME, SET_THEME_LIST } from "@/store/actiontypes";
import { reactive } from "vue";
import userLocalStorage, { IUseLocalStorage } from "./useLocalstorage";

export interface IUseTheme {
    addTheme: (theme: ITheme) => void;
    setTheme: (themeStyle: THEME_STYLE) => void;
    setThemeList: (themes: ITheme[]) => void;
    getThemeStyle: (themeStyle: THEME_STYLE) => IThemeStyle;
}

function useTheme(): IUseTheme {

    const { getThemeList } : IUseLocalStorage = userLocalStorage();
   
    const addTheme = (theme: ITheme): void => {
        const { setThemeList }: IUseLocalStorage = userLocalStorage();
        store.dispatch(ADD_THEME, theme);
        setThemeList(store.state.themes);
    }

    const setTheme = (themeStyle: THEME_STYLE): void => {
        store.dispatch(SET_THEME, themeStyle);
    }

    const setThemeList = (themes: ITheme[]): void => {
        store.dispatch(SET_THEME_LIST, themes);
    }

    const getThemeStyle = (themeStyle: THEME_STYLE): IThemeStyle => {
        let tStyle = reactive<IThemeStyle>({
            backgroundColor: Color.WHITE,
            color: Color.BLACK,
            text: "黑白主题"
        });
        switch (themeStyle) {
            case THEME_STYLE.RED:
                tStyle.backgroundColor = Color.RED;
                tStyle.color = Color.WHITE;
                tStyle.text = "红色主题";
                break;
            case THEME_STYLE.DEFAULT:
                tStyle.backgroundColor = Color.WHITE;
                tStyle.color = Color.BLACK;
                tStyle.text = "默认主题";
                break;
            case THEME_STYLE.GREEN:
                tStyle.backgroundColor = Color.GREEN;
                tStyle.color = Color.WHITE;
                tStyle.text = "绿色主题";
                break;
            case THEME_STYLE.YELLOW:
                tStyle.backgroundColor = Color.YELLOW;
                tStyle.color = Color.WHITE;
                tStyle.text = "黄色主题";
                break;   
        }
        return tStyle;
    }

    return {
        addTheme,
        setTheme,
        setThemeList,
        getThemeStyle
    }
}


export default useTheme;
