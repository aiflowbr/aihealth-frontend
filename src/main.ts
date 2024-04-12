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

const vuetify = createVuetify({
  theme: {
    defaultTheme: "dark",
  },
  components,
  directives,
});

const app = createApp(App).use(vuetify); //.mount('#app')
app.use(router);
app.use(createPinia());
app.use(VueApexCharts);
app.mount("#app");
