<template>
  <UiTitleCard
    title="User information"
    title-icon="mdi-account"
    class-name="px-0 pb-0 rounded-md"
  >
    <v-card max-width="350">
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" :src="userInfo.photo" cover></v-img>

      <v-card-item>
        <v-card-title>{{ userInfo.name }}</v-card-title>

        <v-card-subtitle>
          <span class="me-1">{{ userInfo.username }}</span>
          <v-icon color="error" icon="mdi-account-circle" size="small"></v-icon>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <div>
          {{ userInfo.mail }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text="Change password" block border @click="reserve"></v-btn>
      </v-card-actions>
    </v-card>
  </UiTitleCard>
</template>

<script setup>
import { shallowRef, ref, getCurrentInstance } from "vue";
import UiTitleCard from "@/components/UiTitleCard.vue";
const userInfo = ref({});
const instance = getCurrentInstance();
if (instance) {
  const api = instance.appContext.config.globalProperties.$api;
  api.get("/users/logged_user_info").then((json) => {
    console.log(json);
    userInfo.value = json;
  });
}
</script>
