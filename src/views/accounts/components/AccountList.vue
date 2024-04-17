<template>
  <UiTitleCard title="Account list" class-name="px-0 pb-0 rounded-md">
    <v-table class="bordered-table" hover density="comfortable">
      <thead class="bg-containerBg">
        <tr>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            ID
          </th>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            Username
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in flows" :key="item.id">
          <td class="py-3">
            <router-link
              :to="'/flows/' + item.id"
              class="text-primary link-hover"
              >{{ item.id }}</router-link
            >
          </td>
          <td class="py-3">{{ item.username }}</td>
        </tr>
      </tbody>
    </v-table>
  </UiTitleCard>
</template>

<script setup>
import UiTitleCard from "@/components/UiTitleCard.vue";
import { shallowRef } from "vue";
const flows = shallowRef([
  {
    id: 1,
    source: "ORTHANC",
    neuralnetwork: "CNN-VGG16-PNEUMONIA",
    output: "MEDICAL PANEL API",
    status: "active",
  },
]);
</script>
