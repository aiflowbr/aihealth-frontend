<template>
  <UiTitleCard
    title-icon="mdi-account"
    title="DICOM server list"
    class-name="px-0 pb-0 rounded-md"
  >
    <template v-slot:actions>
      <!-- <v-btn color="success" size="x-small" style="padding-left: 1px; font-size: medium" icon="mdi-plus"></v-btn> -->
    </template>
    <v-table class="bordered-table" hover density="compact">
      <template v-slot:top>
        <v-toolbar flat density="compact">
          <v-spacer></v-spacer>
          <v-btn prepend-icon="mdi-plus" @click="addNode"> Adicionar </v-btn>
        </v-toolbar>
      </template>
      <thead>
        <tr>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            ID
          </th>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            AETitle
          </th>
          <th
            class="text-right text-caption font-weight-bold text-uppercase"
            style="min-width: 100px"
          >
            Hostname
          </th>
          <th
            class="text-right text-caption font-weight-bold text-uppercase"
            style="min-width: 50px"
          >
            Port
          </th>
          <th
            class="text-right text-caption font-weight-bold text-uppercase"
            style="min-width: 100px"
          >
            Interval (s)
          </th>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in projects" :key="item.id">
          <td class="py-3">
            <!-- <router-link
              :to="'/inputs/' + item.id"
              class="text-primary link-hover" > -->
            {{ item.id }}
            <!-- </router-link> -->
          </td>
          <td class="py-3">{{ item.aetitle }}</td>
          <td class="py-3 text-right" style="min-width: 100px">
            {{ item.address }}
          </td>
          <td class="py-3 text-right" style="min-width: 100px">
            {{ item.port }}
          </td>
          <td class="py-3 text-right" style="min-width: 100px">
            <v-chip size="small">
              {{ item.fetch_interval }}
            </v-chip>
          </td>
          <td class="py-3">
            <v-chip variant="text" size="small" class="px-0" v-if="item.status">
              <v-avatar
                size="8"
                color="success"
                variant="flat"
                class="mr-2"
              ></v-avatar>
              Active
            </v-chip>
            <v-chip variant="text" size="small" class="px-0" v-else>
              <v-avatar
                size="8"
                color="warning"
                variant="flat"
                class="mr-2"
              ></v-avatar>
              Offline
            </v-chip>
          </td>
        </tr>
      </tbody>
    </v-table>
  </UiTitleCard>
</template>

<script setup>
import { ref, onMounted } from "vue";
import UiTitleCard from "@/components/UiTitleCard.vue";
import fetchWrapper from "@/utils/helpers/fetch-wrapper";
const projects = ref([]);
const addNode = () => {
  console.log("ADD");
};
onMounted(() => {
  (async () => {
    projects.value = await (
      await fetchWrapper.get(import.meta.env.VITE_APP_BACKEND_PREFIX + "/nodes")
    ).json();
  })();
});
</script>
