<script setup lang="ts">
const props = defineProps({
  title: String,
  titleIcon: String,
  titleIconColor: { type: String, required: false, default: null },
  className: String,
});
</script>

// ||=================|| Ui Title Card||================= //
<template>
  <v-card class="title-card" variant="text" rounded="md">
    <v-card-item class="pb-2 px-0 pt-0">
      <template v-slot:prepend v-if="titleIcon">
        <v-icon :icon="titleIcon" v-if="!titleIconColor"></v-icon>
        <v-icon
          :color="titleIconColor"
          :icon="titleIcon"
          v-if="titleIconColor"
        ></v-icon>
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
