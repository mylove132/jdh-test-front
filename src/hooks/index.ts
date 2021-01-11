import { ITodo, TODO_STATUS } from "@/common/types/todolist";
import { Store } from 'vuex';
import { ADD_THEME, SET_THEME, SET_TODO } from '@/store/actiontypes';
import { useStore } from '@/store';
import { ITheme, THEME_STYLE } from "@/common/types/theme";

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
}

export interface IUseLocalStorage {
    getLocalList: () => ITodo[];
    setLocalList: (todoList: ITodo[]) => void;
}

/**
 * 操作todo列表
 */
function useTodo(): IUseTodo {

    const store: Store<any> = useStore();
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

    const store: Store<any> = useStore();

    const addTheme = (theme: ITheme): void => {
        store.dispatch(ADD_THEME, theme);
    }

    const setTheme = (themeStyle: THEME_STYLE): void => {
        store.dispatch(SET_THEME, themeStyle);
    }

    return {
        addTheme,
        setTheme
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

    return {
        getLocalList,
        setLocalList
    }
}



export {
    useTodo,
    useTheme,
    userLocalStorage
}
