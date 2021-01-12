import { ITheme, THEME_STYLE } from "./theme";
import { ITodo } from "./todolist";

interface IState {
    list: ITodo[];
    themes: ITheme[];
    themeStyle: THEME_STYLE;
}

interface IThemeStyleButton {
    backgroundColor: string;
    color: string;
    text: string;
}

export {
    IState,
    IThemeStyleButton
}