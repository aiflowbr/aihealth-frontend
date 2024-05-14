<template>
  <UiTitleCard
    title="User information"
    title-icon="mdi-account"
    class-name="rounded-md"
  >
    <v-card max-width="350" elevation="5">
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
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" text="Change Password"></v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card title="Change password">
              <v-card-text>
                <ChangePassword />
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  text="Close"
                  class="mr-4 mb-2"
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </UiTitleCard>
</template>

<script setup>
import { shallowRef, ref, getCurrentInstance } from "vue";
import UiTitleCard from "@/components/UiTitleCard.vue";
import ChangePassword from "@/components/ChangePassword.vue";
const userInfo = ref({});
const instance = getCurrentInstance();
if (instance) {
  const api = instance.appContext.config.globalProperties.$api;
  api.get("/users/logged_user_info").then((json) => {
    console.log(json);
    userInfo.value = json;
  });
}
const reserve = () => {
  console.log("CHANGE PASSWORD");
};
</script>
