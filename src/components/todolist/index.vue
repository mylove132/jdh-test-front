<template>
    <div>
        <h1>TODOLIST</h1>
        <t-item></t-item>
    </div>
</template>

<script lang = 'ts'>
import { defineComponent } from 'vue';
import TodoItem from "@/components/todolist/item.vue";

export default defineComponent ({
    name: "TodoList",
    components: {
        "t-item": TodoItem
    },
    setup () {

    }
})
</script>