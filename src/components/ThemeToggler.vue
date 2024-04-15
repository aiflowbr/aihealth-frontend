<template>
  <div>
    <v-btn icon fab dark small class="mx-2" @click="toggleTheme"
      ><v-icon :icon="getIcon()"></v-icon
    ></v-btn>
  </div>
</template>

<script setup>
import { useTheme } from "vuetify";
import { useThemeStore } from "@/stores/theme";
const themeStore = useThemeStore();
const theme = useTheme();
function getIcon() {
  return themeStore.theme == "light"
    ? "mdi-white-balance-sunny"
    : "mdi-moon-waxing-crescent";
}
function toggleTheme() {
  const newTheme = themeStore.theme === "light" ? "dark" : "light";
  themeStore.setTheme(newTheme);
  theme.global.name.value = newTheme;
  // theme.global.current.value.dark ? "light" : "dark";
}
</script>
