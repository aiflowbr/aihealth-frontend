<template>
  <UiTitleCard title="Model list" class-name="px-0 pb-0 rounded-md">
    <v-table class="bordered-table" hover density="comfortable">
      <thead class="bg-containerBg">
        <tr>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            ID
          </th>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            Title
          </th>
          <th
            class="text-right text-caption font-weight-bold text-uppercase"
            style="min-width: 100px"
          >
            Input Dimension
          </th>
          <th
            class="text-right text-caption font-weight-bold text-uppercase"
            style="min-width: 100px"
          >
            Type
          </th>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            Output Dimension
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in projects" :key="item.name">
          <td class="py-3">
            <router-link
              :to="'/neuralnetworks/' + item.number"
              class="text-primary link-hover"
              >{{ item.number }}</router-link
            >
          </td>
          <td class="py-3">{{ item.name }}</td>
          <td class="py-3 text-right" style="min-width: 100px">
            {{ item.hostname }}
          </td>
          <td class="py-3 text-right" style="min-width: 100px">
            <v-chip size="small">
              {{ item.interval }}
            </v-chip>
          </td>
          <td class="py-3">
            {{ item.output_dimension }}
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
    number: 1,
    name: "CNN-VGG16-PNEUMONIA",
    hostname: [224, 224, 3],
    interval: "Classification",
    output_dimension: [1, 1],
  },
]);
</script>
