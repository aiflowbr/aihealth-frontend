<!-- <script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import SystemBar from "./components/SystemBar.vue";
</script> -->
<script setup>
import store from "./plugins/store";
import { ref, onMounted } from "vue";
import LeftMenu from "./components/LeftMenu.vue";
// import InflowData from "./components/InflowData.vue";
const drawer = ref(null);
onMounted(() => {});
</script>

<script>
export default {
  data: () => ({ drawer: null, ws: null, ws_status: false, client_id: null }),
  methods: {
    connectWebSocket() {
      var socket = new WebSocket("ws://localhost:8000/ws");

      socket.onopen = (event) => {
        console.log("Conexão estabelecida com o servidor.");
        this.ws_status = true;
      };

      socket.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        console.log("Mensagem recebida do servidor:", msg);
        store.dispatch("setComputeNodes", msg);
      };

      socket.onerror = (error) => {
        console.error("Erro na conexão:", error);
      };

      socket.onclose = (event) => {
        console.log("Conexão fechada. Tentando reconectar em 1 segundo...");
        this.ws_status = false;
        setTimeout(this.connectWebSocket, 1000);
      };

      return socket;
    },
  },
  mounted() {
    console.log("Initializing communication");
    this.ws = this.connectWebSocket();
    window.WSBACKEND = this.ws;
  },
};
</script>

<template>
  <v-app id="AIHealth">
    <v-system-bar>
      <v-spacer></v-spacer>

      <!-- <v-icon>mdi-square</v-icon> -->

      <v-icon :color="ws_status ? 'success' : 'error'">mdi-circle</v-icon>

      <!-- <v-icon>mdi-triangle</v-icon> -->
    </v-system-bar>

    <v-app-bar v-if="$route.path !== '/'">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>AIHealth</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary v-if="$route.path !== '/'">
      <!--  -->
      <LeftMenu />
    </v-navigation-drawer>

    <v-main class="d-flex">
      <!-- <InflowData /> -->
      <v-container class="d-flex">
        <router-view></router-view>
        <!-- <v-row>
          <template v-for="n in 4" :key="n">
            <v-col class="mt-2" cols="12">
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
              <v-sheet height="150">e</v-sheet>
            </v-col>
          </template>
        </v-row> -->
      </v-container>
    </v-main>
    <v-footer app elevation="5" height="25" class="justify-center"
      ><span class="text-subtitle-2">AIHealth 2024</span></v-footer
    >
  </v-app>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
