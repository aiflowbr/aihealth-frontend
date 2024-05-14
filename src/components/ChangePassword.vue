<template>
  <div>
    <v-form v-model="form" @submit.prevent="onSubmit">
      <v-text-field
        v-model="old_password"
        :readonly="loading"
        :rules="[required]"
        label="Current password"
        placeholder="Enter your password"
        type="password"
        clearable
      ></v-text-field>

      <v-text-field
        v-model="password"
        :readonly="loading"
        :rules="[required]"
        class="mb-3"
        label="New Password"
        placeholder="Enter your password"
        type="password"
        clearable
      ></v-text-field>

      <v-alert
        v-show="error"
        color="rgba(255,0,0,0.15)"
        icon="$error"
        title="Error"
        density="compact"
        class="mb-4 mt-0"
        border="start"
        :text="error_text"
      ></v-alert>
      <v-alert
        v-show="success"
        color="rgba(0,200,100,0.15)"
        icon="$success"
        title="Info"
        density="compact"
        class="mb-4 mt-0"
        border="start"
        :text="success_text"
      ></v-alert>

      <v-btn
        :disabled="!form"
        :loading="loading"
        size="large"
        type="submit"
        variant="elevated"
        color="primary"
        block
      >
        Change password
      </v-btn>
    </v-form>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  userId: { type: Number, default: 0 },
});
</script>
<script>
export default {
  data: () => ({
    form: false,
    old_password: null,
    password: null,
    loading: false,
    error: false,
    error_text: "",
    success: false,
    success_text: "",
  }),

  methods: {
    onSubmit() {
      if (!this.form) return;
      this.error = false;
      this.success = false;
      this.loading = true;
      this.$api
        .put(
          this.userId == 0
            ? "/users/update_logged_user_password"
            : `/users/${this.userId}`,
          {
            old_password: this.old_password,
            password: this.password,
          }
        )
        .then((json) => {
          this.success = true;
          this.success_text = "Password changed successfully";
        })
        .catch((json) => {
          this.error = true;
          this.error_text = json.detail || json;
        })
        .finally(() => {
          this.loading = false;
        });
      //   setTimeout(() => (this.loading = false), 2000);
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
};
</script>
