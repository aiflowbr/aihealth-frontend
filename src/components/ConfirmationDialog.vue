<template>
  <div>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>{{ message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="cancelAction">Cancel</v-btn>
        <v-btn color="red darken-1" text @click="confirmAction">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </div>
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
