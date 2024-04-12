<template>
  <UiTitleCard title="Recent Images" class-name="px-0 pb-0 rounded-md">
    <v-table class="bordered-table" hover density="comfortable">
      <thead class="bg-containerBg">
        <tr>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            ID
          </th>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            Patient Name
          </th>
          <th
            class="text-right text-caption font-weight-bold text-uppercase"
            style="min-width: 100px"
          >
            Modality
          </th>
          <th
            class="text-right text-caption font-weight-bold text-uppercase"
            style="min-width: 100px"
          >
            Flows
          </th>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in projects" :key="item.name">
          <td class="py-3">
            <router-link
              :to="'/inputs/' + item.number"
              class="text-primary link-hover"
              >{{ item.number }}</router-link
            >
          </td>
          <td class="py-3">{{ item.name }}</td>
          <td class="py-3 text-right" style="min-width: 100px">
            {{ item.modality }}
          </td>
          <td class="py-3 text-right" style="min-width: 100px">
            <v-chip size="small">
              {{ item.flows }}
            </v-chip>
          </td>
          <td class="py-3">
            <v-chip
              variant="text"
              size="small"
              class="px-0"
              v-if="item.priority === 'error'"
            >
              <v-avatar
                size="8"
                color="error"
                variant="flat"
                class="mr-2"
              ></v-avatar>
              Error
            </v-chip>
            <v-chip
              variant="text"
              size="small"
              class="px-0"
              v-else-if="item.priority === 'processed'"
            >
              <v-avatar
                size="8"
                color="success"
                variant="flat"
                class="mr-2"
              ></v-avatar>
              Processed
            </v-chip>
            <v-chip variant="text" size="small" class="px-0" v-else>
              <v-avatar
                size="8"
                color="warning"
                variant="flat"
                class="mr-2"
              ></v-avatar>
              Pending
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
    number: 13256498,
    modality: "DX",
    name: "Robot 10",
    flows: "1",
    priority: "pending",
  },
  {
    number: 13286564,
    modality: "DX",
    name: "Robot 9",
    flows: "1",
    priority: "pending",
  },
  {
    number: 84564564,
    modality: "DX",
    name: "Robot 8",
    flows: "1",
    priority: "processed",
  },
  {
    number: 86739658,
    modality: "DX",
    name: "Robot 7",
    flows: "1",
    priority: "processed",
  },
  {
    number: 98652366,
    modality: "DX",
    name: "Robot 6",
    flows: "1",
    priority: "processed",
  },
  {
    number: 98753263,
    modality: "DX",
    name: "Robot 5",
    flows: "1",
    priority: "error",
  },
  {
    number: 98753275,
    modality: "DX",
    name: "Robot 4",
    flows: "1",
    priority: "processed",
  },
  {
    number: 98753291,
    modality: "DX",
    name: "Robot 3",
    flows: "1",
    priority: "processed",
  },
  {
    number: 98756325,
    modality: "DX",
    name: "Robot 2",
    flows: "1",
    priority: "processed",
  },
  {
    number: 98764564,
    modality: "DX",
    name: "Robot 1",
    flows: "1",
    priority: "processed",
  },
]);
</script>
