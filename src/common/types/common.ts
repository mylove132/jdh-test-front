import { ITheme, THEME_STYLE } from "./theme";
import { ITodo } from "./todolist";

interface IState {
    list: ITodo[];
    themes: ITheme[];
    themeStyle: THEME_STYLE;
}

export {
    IState
}