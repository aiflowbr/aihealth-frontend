<template>
  <v-container class="pa-0">
    <v-row class="mb-0">
      <v-col cols="12" md="12">
        <h1>Dashboard</h1>
      </v-col>
      <v-col>
        <v-row class="mb-0">
          <v-col cols="12" md="8"><RecentInputs /></v-col>
          <v-col cols="12" md="4"><FlowsReport /></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import RecentInputs from "./components/RecentInputs.vue";
import FlowsReport from "./components/FlowsReport.vue";
</script>
<script>
export default {
  data: () => ({}),
};
</script>
