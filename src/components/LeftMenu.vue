<template>
  <v-card class="flexcard d-flex" height="100%">
    <v-layout>
      <v-navigation-drawer permanent location="right">
        <template v-slot:prepend>
          <!-- prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg" -->
          <v-list-item lines="two" title="Admin" subtitle="Logged in" value="user" to="/user"
            :active="isActive({ to: '/user' })">
            <template v-slot:prepend>
              <v-avatar icon="mdi-account-circle"></v-avatar>
            </template>
          </v-list-item>
        </template>
        <v-list density="compact" nav>
          <v-list-item v-for="(item, index) in items" :key="index" :prepend-icon="item.icon" :title="item.title"
            :value="item.value" :to="item.to" :active="isActive(item)"></v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn :prepend-icon="LogoutOutlined" block @click="logout"> Logout </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main></v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { LogoutOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { useLeftMenuStore } from "@/stores/leftmenu";
const router = useRouter();
const leftMenuStore = useLeftMenuStore();
const logout = () => {
  leftMenuStore.setLeftMenu(false);
  console.log(leftMenuStore);
  router.push("/");
};
</script>

<script>
// mdi-view-dashboard
export default {
  data: () => ({
    items: [
      {
        icon: "mdi-view-dashboard",
        title: "Dashboard",
        value: "dashboard",
        to: "/dashboard",
      },
      {
        icon: "mdi-import",
        title: "Input sources",
        value: "inputs",
        to: "/inputs",
      },
      {
        icon: "mdi-brain",
        title: "Neural networks",
        value: "networks",
        to: "/neuralnetworks",
      },
      {
        icon: "mdi-export",
        title: "Output targets",
        value: "outputs",
        to: "/outputs",
      },
      {
        icon: "mdi-graph-outline",
        title: "Prediction flows",
        value: "prediction-flows",
        to: "/flows",
      },
      {
        icon: "mdi-account-box",
        title: "Accounts",
        value: "accounts",
        to: "/accounts",
      },
      {
        icon: "mdi-cog-outline",
        title: "Settings",
        value: "settings",
        to: "/settings",
      },
    ],
  }),
  methods: {
    isActive(item) {
      if (item) return this.$route.path === item.to;
      return false;
    },
  },
};
</script>
