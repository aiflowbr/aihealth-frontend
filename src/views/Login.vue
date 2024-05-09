<template>
  <div class="flex-1-1">
    <div class="fill-height">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" sm="8" md="6">
          <v-card :loading="loading" :disabled="loading">
            <template v-slot:loader="{ isActive }">
              <v-progress-linear :active="isActive" height="4" indeterminate></v-progress-linear>
            </template>
            <v-card-title class="headline"> Login </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field v-model="username" label="Username" outlined></v-text-field>
                <v-text-field v-model="password" label="Password" outlined type="password"></v-text-field>
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
import { ref, onMounted } from "vue";
import { fetchAPIWrapper } from "@/utils/helpers/fetch-wrapper";
// const el = ref()
// onMounted(() => {
//   console.log(ref);
// })
</script>

<script>
export default {
  data() {
    return {
      loading: false,
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      // Lógica para autenticar o usuário
      this.loading = true;
      const payload = { username: this.username, password: this.password };
      const formData = new FormData();
      for (const key in payload) {
        if (payload.hasOwnProperty(key)) {
          formData.append(key, payload[key]);
        }
      }
      var res = await (await fetchAPIWrapper.post("/users/authenticate", formData)).json();
      if (res && res.access_token) {
        console.log(res);
      }
      this.loading = false;
    },
  },
  mounted() {
    console.log("LOGIN MOUNTED!")
  }
};
</script>
