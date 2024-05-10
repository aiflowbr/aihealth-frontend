<template>
  <UiTitleCard title="Account list" class-name="px-0 pb-0 rounded-md">
    <v-table class="bordered-table" hover density="comfortable">
      <thead class="bg-containerBg">
        <tr>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            ID
          </th>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            Name
          </th>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            Username
          </th>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            E-mail
          </th>
          <th class="text-center text-caption font-weight-bold text-uppercase">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in accounts" :key="item.id">
          <td class="py-3">{{ item.id }}</td>
          <td class="py-3">{{ item.name }}</td>
          <td class="py-3">{{ item.username }}</td>
          <td class="py-3">{{ item.mail }}</td>
          <td class="py-3 text-center">
            <v-icon class="me-2" size="small" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon size="small" @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </td>
        </tr>
      </tbody>
    </v-table>
  </UiTitleCard>
</template>

<script setup>
import UiTitleCard from "@/components/UiTitleCard.vue";
import { shallowRef, onMounted, getCurrentInstance } from "vue";
const accounts = shallowRef([]);
onMounted(() => {
  const instance = getCurrentInstance();
  if (instance) {
    const api = instance.appContext.config.globalProperties.$api;
    api.get("/users").then((json) => { console.log(json); accounts.value = json; });
  }
});
const editItem = (item) => {
  console.log(item);
};
const deleteItem = (item) => {
  console.log(item);
};
</script>
