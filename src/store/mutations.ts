import { SET_TODO } from './actiontypes';
import { IState, ITodo } from '@/common/types/todolist';

export default {
    [SET_TODO](state: IState, todo: ITodo): void {
        state.list.unshift(todo);
    }
}