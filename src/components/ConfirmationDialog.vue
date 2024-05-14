<template>
  <v-card :title="title">
    <v-card-text>{{ message }}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="mr-2 mb-2" @click="cancelAction">
        Cancel
        <v-icon icon="mdi-cancel" end></v-icon>
      </v-btn>
      <v-btn class="mr-4 mb-2" color="red" @click="confirmAction">
        Confirm
        <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  message: String,
  buttonText: String,
  onConfirm: Function,
  onCancel: Function,
});

const dialog = ref(false);

function confirmAction() {
  if (props.onConfirm) {
    props.onConfirm();
  }
}

function cancelAction() {
  if (props.onCancel) {
    props.onCancel();
  }
}
</script>
