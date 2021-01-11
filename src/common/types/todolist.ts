interface ITodo {
    id: number;
    content: string;
    status: TODO_STATUS;
}

enum TODO_STATUS {
    WILLDO = "willdo",
    FINISHED = "finished",
    DOING = "doing"
}


export {
    ITodo,
    TODO_STATUS
}