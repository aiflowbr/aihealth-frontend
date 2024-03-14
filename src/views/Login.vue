<template>
  <div class="flex-1-1">
    <div class="fill-height">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title class="headline"> Login </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field
                  v-model="username"
                  label="Username"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  outlined
                  type="password"
                ></v-text-field>
                <v-btn type="submit" color="primary">Login</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup></script>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Lógica para autenticar o usuário
      console.log("Username:", this.username);
      console.log("Password:", this.password);
      this.$router.push("/dashboard");
    },
  },
};
</script>
