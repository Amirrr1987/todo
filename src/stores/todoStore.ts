import { defineStore } from "pinia";
// import { Todos } from "../boot/models";

export const useTodosStore = defineStore("counter", {
  state: () => ({
    todos: [] as any,
  }),

  actions: {
    addTodo(newTask: object): void {
      this.todos.push(newTask);
    },
    deleteTodo(index: number): void {
      this.todos.splice(index, 1);
    }
  },
});
