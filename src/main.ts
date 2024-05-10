import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "./router";
import VueApexCharts from "vue3-apexcharts";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { useThemeStore } from "@/stores/theme";
import apiPlugin from "@/utils/helpers/fetch-wrapper";

const app = createApp(App);
app.use(createPinia());
app.use(
  createVuetify({
    theme: {
      defaultTheme: useThemeStore().theme === "dark" ? "dark" : "light",
    },
    components,
    directives,
  })
);
app.use(apiPlugin);

// app.use(vuetify); //.mount('#app')
app.use(router);
app.use(VueApexCharts);
app.mount("#app");
