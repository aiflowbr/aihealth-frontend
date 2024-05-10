<template>
  <div class="flex-1-1">
    <div class="fill-height">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" sm="8" md="6">
          <v-card :loading="loading" :disabled="loading">
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-card-title class="headline"> Login </v-card-title>
            <v-card-text>
              <v-form v-model="form" @submit.prevent="login">
                <v-text-field
                  v-model="username"
                  label="Username"
                  :rules="[required]"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  :rules="[required]"
                  outlined
                  type="password"
                ></v-text-field>
                <v-alert
                  v-show="error"
                  color="rgba(255,0,0,0.15)"
                  icon="$error"
                  title="Error"
                  density="compact"
                  class="mb-4 mt-2"
                  border="start"
                  :text="error_text"
                ></v-alert>
                <v-btn type="submit" color="primary">Login</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
// import { ref, onMounted } from "vue";
// import { fa } from "vuetify/locale";
import { useAuthStore } from "@/stores/auth";
</script>

<script>
export default {
  data() {
    return {
      form: false,
      loading: false,
      error: false,
      error_text: "",
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      if (!this.form) return;
      // Lógica para autenticar o usuário
      this.loading = true;
      const payload = { username: this.username, password: this.password };
      const formData = new FormData();
      for (const key in payload) {
        if (payload.hasOwnProperty(key)) {
          formData.append(key, payload[key]);
        }
      }
      this.error = false;
      const { setToken } = useAuthStore();
      this.$api
        .post("/users/authenticate", formData)
        .then((json) => {
          setToken(json.access_token);
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          this.error = true;
          this.error_text = error;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
  mounted() {
    console.log("LOGIN MOUNTED!");
  },
};
</script>
