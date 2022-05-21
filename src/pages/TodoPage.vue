<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input
        v-model="newTask"
        @keyup.enter="addNewTask"
        class="col"
        bg-color="white"
        filled
        square
        placeholder="Add task"
        dense
      >
        <template v-slot:append>
          <q-btn @click="addNewTask" flat round color="primary" icon="add" />
        </template>
      </q-input>
    </div>
    <q-list class="bg-white" separator bordered>
      <template v-for="(task, index) in todos" :key="index">
        <q-item
          tag="label"
          v-ripple
          clickable
          @click="task.done != task.done"
          :class="{ 'task-done': task.done }"
        >
          <q-item-section avatar>
            <q-checkbox
              v-model="task.done"
              class="no-pointer-events"
              color="primary"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ task.title }}</q-item-label>
          </q-item-section>

          <q-btn
            @click="deleteTask(index)"
            flat
            round
            color="primary"
            icon="delete"
          />
        </q-item>
      </template>
    </q-list>
    <div class="no-task absolute-center" v-if="!todos.length">
      <q-img src="../assets/img/empty.svg" />
      <div class="text-h6 q-mt-lg text-primary">NO TASK</div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import { useTodosStore } from "../stores/todoStore";
import { computed } from "@vue/reactivity";
export default defineComponent({
  name: "TodoPage",

  setup() {
    const $q = useQuasar();
    const alert = (index: number) => {
      $q.dialog({
        title: "Allert",
        message: "Really delete this task?",
        cancel: true,
        persistent: true,
      }).onOk(() => {
        todosStore.deleteTodo(index);
        $q.notify({ message: "Your task deleted", color: "negative" });
      });
    };
    const todosStore = useTodosStore();

    const newTask = ref("");

    const todos = computed(() => {
      return todosStore.todos;
    });
    const addNewTask = () => {
      if (newTask.value) {
        todosStore.addTodo({ title: newTask.value, done: false });
        newTask.value = "";
      } else {
        $q.notify({
          message: "please enter a task",
          color: "primary",
        });
      }
    };
    const deleteTask = (index: number) => {
      alert(index);
    };

    return { todos, newTask, addNewTask, deleteTask };
  },
});
</script>

<style lang="scss">
.task-done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
.no-task .text-h6 {
  opacity: 0.4;
}
</style>
