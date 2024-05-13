<template>
  <div>
    <v-card>
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
          label="New Password"
          placeholder="Enter your password"
          type="password"
          clearable
        ></v-text-field>

        <br />

        <v-btn
          :disabled="!form"
          :loading="loading"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          Change password
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    form: false,
    old_password: null,
    password: null,
    loading: false,
  }),

  methods: {
    onSubmit() {
      if (!this.form) return;
      this.loading = true;
      this.$api
        .put("/users/1", {
          old_password: this.old_password,
          password: this.password,
        })
        .then((json) => {
          console.log(json);
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
