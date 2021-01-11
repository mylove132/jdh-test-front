import { 
    SET_TODO,
    ADD_THEME,
    SET_THEME 
} from './actiontypes';
import { ITodo } from '@/common/types/todolist';
import { ITheme, THEME_STYLE } from '@/common/types/theme';
import { IState } from '@/common/types/common';

export default {
    [SET_TODO](state: IState, todo: ITodo): void {
        state.list.unshift(todo);
    },
    [ADD_THEME](state: IState, theme: ITheme): void {
        state.themes = [theme, ...state.themes];
    },
    [SET_THEME](state: IState, themeStyle: THEME_STYLE): void {
        state.themeStyle = themeStyle;
    }
}