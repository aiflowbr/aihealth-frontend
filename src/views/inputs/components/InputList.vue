<template>
  <UiTitleCard title="Received data" class-name="px-0 pb-0 rounded-md">
    <v-table class="bordered-table" hover density="comfortable">
      <thead class="bg-containerBg">
        <tr>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            ID
          </th>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            Date
          </th>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            Patient Name
          </th>
          <th
            class="text-right text-caption font-weight-bold text-uppercase"
            style="min-width: 100px"
          >
            source
          </th>
          <th
            class="text-right text-caption font-weight-bold text-uppercase"
            style="min-width: 100px"
          >
            Modality
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in projects" :key="item.name">
          <td class="py-3">
            <!-- <router-link
              :to="'/inputs/' + item.id"
              class="text-primary link-hover"
              > -->
            {{ item.id }}
            <!-- </router-link> -->
          </td>
          <td class="py-3">
            {{ item.date }}
          </td>
          <td class="py-3">{{ item.name }}</td>
          <td class="py-3 text-right" style="min-width: 100px">
            {{ item.source }}
          </td>
          <td class="py-3 text-right" style="min-width: 100px">
            <v-chip size="small">
              {{ item.modality }}
            </v-chip>
          </td>
        </tr>
      </tbody>
    </v-table>
  </UiTitleCard>
</template>

<script setup>
import UiTitleCard from "@/components/UiTitleCard.vue";
import { shallowRef } from "vue";
const projects = shallowRef([
  {
    id: 1,
    name: "Robot 123",
    source: "ORTHANC",
    modality: "DX",
    date: "2024-04-12",
  },
]);
</script>
