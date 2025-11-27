<template>
<table>
  <thead>
  <tr>
    <th scope="col">Title</th>
    <th scope="col">Active</th>
    <th scope="col">Start Date</th>
    <th scope="col">End Date</th>
    <th scope="col">Actions</th>
  </tr>
  </thead>
  <tbody>
    <tr v-for="(task,index) in tasks">
      <td>{{ task.title }}</td>
      <td>{{ task.active ? "active" : "inactive"}} </td>
      <td>{{task.start_date}}</td>
      <td>{{ task.end_date }}</td>
      <td><button @click="removeTask(index)">Remove</button></td>
    </tr>
  </tbody>
</table>

  <form @submit.prevent="addTask">
    <fieldset>
      <input
          name="Title"
          placeholder="Title"
          v-model="title"
      />
      <input type="date"
          name="tt.mm.jjjj"
          placeholder="tt.mm.jjjj"
             v-model="startDate"
      />
      <input type="date"
          name="tt.mm.jjjj"
          placeholder="tt.mm.jjjj"
             v-model="endDate"
      />
      <input type="checkbox"
             name="Active"
             placeholder="Active"
             v-model="active"
       />
      <label>Active</label>
    </fieldset>
    <button type="submit">Add Task</button>
  </form>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue';
import type InterfaceTask from "@/types/InterfaceTask.ts";

const tasks = ref<InterfaceTask[]>([]);
const task = ref<InterfaceTask>();

const title = ref('');
const startDate = ref('');
const endDate = ref('');
const active = ref(false);

function addTask(): void {
  tasks.value.push({
    title: title.value,
    active: active.value,
    start_date: startDate.value,
    end_date: endDate.value,
      });
}

function removeTask(index: number): void {
  tasks.value.splice(index, 1)
}
</script>

<style scoped>

</style>