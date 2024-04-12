<template>
    <UiTitleCard title="DICOM server list" class-name="px-0 pb-0 rounded-md">
      <v-table class="bordered-table" hover density="comfortable">
        <thead class="bg-containerBg">
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
              {{ item.hostname }}
            </td>
            <td class="py-3 text-right" style="min-width: 100px">
              <v-chip size="small">
                {{ item.interval }}
              </v-chip>
            </td>
            <td class="py-3">
              <v-chip
                variant="text"
                size="small"
                class="px-0"
                v-if="item.priority === 'active'"
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
  const projects = shallowRef([
    {
      number: 1,
      name: "ORTHANC",
      hostname: "orthanc.local",
      interval: "1",
      priority: "active",
    },
  ]);
  </script>
  