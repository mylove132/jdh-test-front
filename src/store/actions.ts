import {ITodo, TODO_STATUS} from '@/common/types/todolist';
import { 
    SET_TODO, 
    ADD_THEME,
    SET_THEME, 
    SET_THEME_LIST
} from './actiontypes';
import { Commit } from 'vuex';
import { ITheme, THEME_STYLE } from '@/common/types/theme';
import { IState } from '@/common/types/common';

interface Ictx {
    commit: Commit;
    state: IState;
}

export default {
    [SET_TODO]( {commit}: Ictx, todo: ITodo ): void {
        commit(SET_TODO, todo);
    },
    [ADD_THEME]( {commit}: Ictx, theme: ITheme ): void {
        commit(ADD_THEME, theme);
    },
    [SET_THEME]( {commit}: Ictx, themeStyle: THEME_STYLE ): void {
        commit(SET_THEME, themeStyle);
    },
    [SET_THEME_LIST]( {commit}: Ictx, themes: ITheme[] ): void {
        commit(SET_THEME_LIST, themes);
    }
}