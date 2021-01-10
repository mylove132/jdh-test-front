import {ITodo, IState, TODO_STATUS} from '@/common/types/todolist';
import { SET_TODO } from './actiontypes';
import { Commit } from 'vuex';

interface Ictx {
    commit: Commit;
    state: IState;
}

export default {
    [SET_TODO]( {commit}: Ictx, todo: ITodo ): void {
        commit(SET_TODO, todo);
    }
}