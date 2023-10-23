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
      <template v-for="(task, index) in todoStore.todoList" :key="index">
        <q-item
          tag="label"
          clickable
          @click="task.compleat != task.compleat"
          :class="{ 'task-compleat': task.compleat }"
        >
          <q-item-section avatar>
            <q-checkbox
              v-model="task.compleat"
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
    <div class="no-task absolute-center" v-if="!todoStore.todoList.length">
      <q-img src="../assets/img/empty.svg" />
      <div class="text-h6 q-mt-lg text-primary">NO TASK</div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useTodoStore } from "../stores/todoStore";
import { ITask } from "src/model";

const quasar = useQuasar();
const todoStore = useTodoStore();

const newTask = ref("");

const addNewTask = () => {
  if (newTask.value) {
    const obj: ITask = {
      title: newTask.value,
      compleat: false,
      description: "",
    };
    todoStore.addTodo(obj);
    newTask.value = "";
  } else {
    quasar.notify({
      message: "please enter a task",
      color: "primary",
    });
  }
};
const deleteTask = (index: number) => {
  quasar
    .dialog({
      title: "Alert",
      message: "Really delete this task?",
      cancel: true,
      persistent: true,
    })
    .onOk(() => {
      todoStore.deleteTodo(index);
      quasar.notify({ message: "Your task deleted", color: "negative" });
    });
};
</script>

<style lang="scss">
.task-compleat {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
.no-task .text-h6 {
  opacity: 0.4;
}
</style>
