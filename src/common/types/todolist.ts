interface ITodo {
    id: number;
    content: string;
    status: TODO_STATUS;
}

interface IState {
    list: ITodo[];
}

enum TODO_STATUS {
    WILLDO = "willdo",
    FINISHED = "finished",
    DOING = "doing"
}


export {
    ITodo,
    IState,
    TODO_STATUS
}