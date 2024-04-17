<script setup lang="ts">
const props = defineProps({
  title: String,
  titleIcon: String,
  titleIconColor: { type: String, required: false, default: 'primary' },
  className: String,
});
</script>

// ||=================|| Ui Title Card||================= //
<template>
  <v-card class="title-card" variant="text" rounded="md">
    <v-card-item class="pb-2 px-0 pt-0">
      <template v-slot:prepend v-if="titleIcon">
        <v-icon :color="titleIconColor" :icon="titleIcon"></v-icon>
      </template>
      <template v-slot:append>
        <slot name="actions"></slot>
      </template>
      <v-card-title class="text-h6">{{ props.title }}</v-card-title>
    </v-card-item>
    <v-card-text variant="outlined" :class="`${props.className}`">
      <slot />
    </v-card-text>
  </v-card>
</template>
