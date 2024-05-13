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
            <v-dialog max-width="500">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  icon="mdi-pencil"
                  size="small"
                  flat
                  @click="editItem(item, activatorProps)"
                ></v-btn>
                <v-btn
                  v-bind="activatorProps"
                  icon="mdi-delete"
                  size="small"
                  flat
                  @click="deleteItem(item, activatorProps)"
                ></v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card :title="dialogTitle" v-if="editPassword">
                  <v-card-text>
                    <ChangePassword :user-id="item.id" />
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      text="Close"
                      v-if="editPassword"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
                <ConfirmationDialog
                  v-if="!editPassword"
                  title="Confirm deletion?"
                  message="confirm to delete account number x"
                  @confirm="confirmDelete(item)"
                  @cancel="isActive.value = false"
                />
              </template>
            </v-dialog>
          </td>
        </tr>
      </tbody>
    </v-table>
  </UiTitleCard>
</template>

<script setup>
import UiTitleCard from "@/components/UiTitleCard.vue";
import { shallowRef, onMounted, getCurrentInstance, ref } from "vue";
import ChangePassword from "@/components/ChangePassword.vue";
import ConfirmationDialog from "@/components/ConfirmationDialog.vue";
const dialogTitle = ref("");
const editPassword = ref(false);
const accounts = shallowRef([]);
onMounted(() => {
  const instance = getCurrentInstance();
  if (instance) {
    const api = instance.appContext.config.globalProperties.$api;
    api.get("/users").then((json) => {
      console.log(json);
      accounts.value = json;
    });
  }
});
const editItem = (item, activatorProps) => {
  dialogTitle.value = "Change password";
  editPassword.value = true;
  console.log(item);
};
const deleteItem = (item, activatorProps) => {
  dialogTitle.value = "Delete account";
  editPassword.value = false;
  console.log(item);
};
const confirmDelete = (item) => {
  console.log(item);
};
</script>
