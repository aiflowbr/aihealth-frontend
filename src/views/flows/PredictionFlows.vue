<template>
  <v-container class="pa-0">
    <v-row class="mb-0">
      <v-col cols="12" md="12">
        <h1>Prediction flows</h1>
      </v-col>
      <v-col>
        <v-row class="mb-0">
          <v-col cols="12" md="12"><PredictionFlowList /></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container class="pa-0">
</template>
<script setup>
import PredictionFlowList from "./components/PredictionFlowList.vue";
</script>
<script>
export default {
  data: () => ({}),
};
</script>
