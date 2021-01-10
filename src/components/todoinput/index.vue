<template>
    <div>
        <input v-model="todoValue" @keyup="setTodoValue" />
    </div>
</template>

<script lang = 'ts'>
import { defineComponent, ref } from 'vue';
import { useTodo, IUseTodo, IUseLocalStorage, userLocalStorage } from "@/hooks/index";

const { setTodo }: IUseTodo = useTodo();

export default defineComponent ({
    name: "TodoInput",
    setup () {
        const todoValue = ref<string>('');
        const setTodoValue = (e: KeyboardEvent): void => {
            console.log(e.keyCode)
            if (e.keyCode === 13 && todoValue.value.trim().length) {
                setTodo(todoValue.value);
                todoValue.value = '';
            }
        }
        return {
            todoValue,
            setTodoValue
        }
    }
})
</script>