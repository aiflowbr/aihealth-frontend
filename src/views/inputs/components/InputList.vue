<template>
  <UiTitleCard
    title-icon="mdi-import"
    title="Received data"
    class-name="px-0 pb-0 rounded-md"
  >
    <v-data-table :headers="headers" :items="input_data">
      <template v-slot:item.actions="{ item }">
        <v-icon class="me-2" size="small" @click="showItem(item)">
          mdi-eye
        </v-icon>
      </template>
    </v-data-table>
  </UiTitleCard>
</template>

<script setup>
{
  /* <v-table class="bordered-table" hover density="comfortable">
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
          <th class="text-right text-caption font-weight-bold text-uppercase" style="min-width: 100px">
            source
          </th>
          <th class="text-right text-caption font-weight-bold text-uppercase" style="min-width: 100px">
            Modality
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in input_data" :key="item.name">
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
    </v-table> */
}
import UiTitleCard from "@/components/UiTitleCard.vue";
import { shallowRef } from "vue";
const input_data = shallowRef([
  {
    id: 1,
    series: "5465464-6546-545",
    source: "ORTHANC",
    modality: "DX",
    date: "2024-04-12",
  },
]);
const headers = shallowRef([
  { title: "Id", key: "id" },
  {
    title: "SeriesInstanceUID",
    align: "start",
    sortable: false,
    key: "series",
  },
  { title: "Source", key: "source" },
  { title: "Modality", key: "modality" },
  { title: "Date", key: "date" },
  { title: "Actions", key: "actions", sortable: false },
]);
const showItem = () => {
  console.log("SHOW");
};
</script>
