<template>
  <v-container class="pa-0">
    <v-row class="mb-0">
      <v-col cols="12" md="12">
        <h1>Neural Networks</h1>
      </v-col>
      <v-col>
        <v-row class="mb-0">
          <v-col cols="12" md="12"><NeuralNetworkList /></v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import NeuralNetworkList from "./components/NeuralNetworkList.vue";
</script>
<script>
export default {
  data: () => ({}),
};
</script>
