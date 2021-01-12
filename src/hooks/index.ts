import { ITodo, TODO_STATUS } from "@/common/types/todolist";
import { Store } from 'vuex';
import { ADD_THEME, SET_THEME, SET_TODO, SET_THEME_LIST } from '@/store/actiontypes';
import { store } from '@/store';
import { ITheme, THEME_STYLE } from "@/common/types/theme";
import { Color, SET_THEME_STYLE, THEME_LIST } from '@/common/contants';
import { IThemeStyle } from "@/common/types/common";
import { reactive } from "vue";

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
    setThemeList: (themes: ITheme[]) => void;
    getThemeStyle: (themeStyle: THEME_STYLE) => IThemeStyle;
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
