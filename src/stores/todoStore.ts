import { defineStore } from "pinia";
import { ITask } from "src/model";
import { computed, ref, watch } from "vue";

export const useTodoStore = defineStore("Todo", () => {
  const todoList = ref(JSON.parse(localStorage.getItem("todoList") || "[]"));

  const addTodo = (newTask: ITask) => {
    todoList.value.push(newTask);
    localStorage.setItem("todoList", JSON.stringify(todoList.value));
  };

  const deleteTodo = (index: number) => {
    todoList.value.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(todoList.value));
  };

  return {
    todoList,
    addTodo,
    deleteTodo,
  };
});
