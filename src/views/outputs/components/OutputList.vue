<template>
  <UiTitleCard title="Targets" class-name="px-0 pb-0 rounded-md">
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
            Type
          </th>
          <th class="text-left text-caption font-weight-bold text-uppercase">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in outputs" :key="item.id">
          <td class="py-3">
            <router-link
              :to="'/outputs/' + item.id"
              class="text-primary link-hover"
              >{{ item.id }}</router-link
            >
          </td>
          <td class="py-3">{{ item.name }}</td>
          <td class="py-3 text-right" style="min-width: 100px">
            <v-chip size="small">
              {{ item.type }}
            </v-chip>
          </td>
          <td class="py-3">
            <v-chip
              variant="text"
              size="small"
              class="px-0"
              v-if="item.status === 'active'"
            >
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
import UiTitleCard from "@/components/UiTitleCard.vue";
import { shallowRef } from "vue";
const outputs = shallowRef([
  {
    id: 1,
    name: "MEDICAL PANEL API",
    type: "API",
    status: "active",
  },
]);
</script>
