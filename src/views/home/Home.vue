<template>
    <div>
    <t-input></t-input>
    <t-list></t-list>
    </div>
</template>

<script lang = 'ts'>
import { defineComponent } from 'vue';
import TodoInput from "@/components/todoinput/index.vue";
import TodoList from "@/components/todolist/index.vue";

export default defineComponent ({
  name : "Home",
  components: {
      "t-input" : TodoInput,
      "t-list" : TodoList
  } 
})
</script>