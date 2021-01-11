import { ITodo, TODO_STATUS } from "@/common/types/todolist";
import { Store } from 'vuex';
import { ADD_THEME, SET_THEME, SET_TODO, SET_THEME_LIST } from '@/store/actiontypes';
import { store } from '@/store';
import { ITheme, THEME_STYLE } from "@/common/types/theme";
import { THEME_LIST } from '@/common/contants';

export interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: () => void;
    setStatus: () => void;
    setDoing: () => void;
}

export interface IUseTheme {
    addTheme: (theme: ITheme) => void;
    setTheme: (themeStyle: THEME_STYLE) => void;
    setThemeList: () => void;
    setLocalThemeList: () => void;
}

export interface IUseLocalStorage {
    getLocalList: () => ITodo[];
    setLocalList: (todoList: ITodo[]) => void;
    setThemeList: (themes: ITheme[]) => void;
    getThemeList: () => ITheme[];
}

/**
 * 操作todo列表
 */
function useTodo(): IUseTodo {

    const { setLocalList }: IUseLocalStorage = userLocalStorage();

    function setTodo(content: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: content,
            status: TODO_STATUS.WILLDO
        }
        store.dispatch(SET_TODO, todo);
        setLocalList(store.state.list);
    };
    function setTodoList() {
    };

    function removeTodo() { };

    function setStatus() { };

    function setDoing() { }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }
}

function useTheme(): IUseTheme {


    const { getThemeList } : IUseLocalStorage = userLocalStorage();
    const themes: ITheme[] = getThemeList();
    
    const addTheme = (theme: ITheme): void => {
        const { setThemeList }: IUseLocalStorage = userLocalStorage();
        store.dispatch(ADD_THEME, theme);
    }

    const setTheme = (themeStyle: THEME_STYLE): void => {
        store.dispatch(SET_THEME, themeStyle);
    }

    const setThemeList = (): void => {
        store.dispatch(SET_THEME_LIST, store.state.themes);
    }

    const setLocalThemeList = (): void => {
        store.dispatch(SET_THEME_LIST, themes);
    }


    return {
        addTheme,
        setTheme,
        setThemeList,
        setLocalThemeList
    }
}

/**
 * 操作localstorage
 */
function userLocalStorage(): IUseLocalStorage {

    function getLocalList(): ITodo[] {
        return JSON.parse(localStorage.getItem("todoList") || "[]");
    }

    function setLocalList(todoList: ITodo[]): void {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }

    function setThemeList(themes: ITheme[]): void {
        localStorage.setItem(THEME_LIST, JSON.stringify(themes));
    }

    function getThemeList(): ITheme[] {
        return JSON.parse(localStorage.getItem(THEME_LIST) || "[]");
    }

    return {
        getLocalList,
        setLocalList,
        setThemeList,
        getThemeList
    }
}



export {
    useTodo,
    useTheme,
    userLocalStorage
}
