<template>
  <v-row>
    <v-col class="mt-2" cols="12">
      <div>Compute: {{ computeNodes }}</div>
    </v-col>
    <v-col class="mt-2" cols="12"
      ><v-card flat>
        <v-card-title class="d-flex align-center pe-2">
          <v-icon icon="mdi-expansion-card"></v-icon> &nbsp; Compute Nodes

          <v-spacer></v-spacer>

          <v-text-field
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            density="compact"
            label="Search"
            single-line
            flat
            hide-details
            variant="solo-filled"
          ></v-text-field>
        </v-card-title>

        <v-divider></v-divider>
        <v-data-table v-model:search="search" :items="items">
          <template v-slot:header.active>
            <div class="text-end">Active</div>
          </template>

          <template v-slot:item.image="{ item }">
            <v-card class="my-2" elevation="2" rounded>
              <v-img
                :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
                height="64"
                cover
              ></v-img>
            </v-card>
          </template>

          <template v-slot:item.health="{ item }">
            <v-rating
              :model-value="item.health"
              color="orange-darken-2"
              density="compact"
              size="small"
              readonly
            ></v-rating>
          </template>

          <template v-slot:item.active="{ item }">
            <div class="text-end">
              <v-chip
                :color="item.active ? 'green' : 'red'"
                :text="item.active ? 'Online' : 'Offline'"
                class="text-uppercase"
                label
                size="small"
              ></v-chip>
            </div>
          </template>
        </v-data-table> </v-card
    ></v-col>
    <template v-for="n in 4" :key="n">
      <v-col class="mt-2" cols="12">
        <strong>Category {{ n }}</strong>
      </v-col>

      <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
        <v-sheet height="150">e</v-sheet>
      </v-col>
    </template>
  </v-row>
</template>

<script setup></script>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    search: "",
    items: [
      {
        name: "Ryzen 7700x + RTX 3060Ti 8GB",
        image: "1.png",
        ram: 64,
        health: 5,
        active: true,
      },
      {
        name: "Ryzen 5500 + RTX 3060 12GB",
        image: "2.png",
        ram: 32,
        health: 4,
        active: false,
      },
      {
        name: "Intel Processador Core i9-14900K + RTX 4060Ti 8GB",
        image: "3.png",
        ram: 32,
        health: 3,
        active: true,
      },
      {
        name: "Vortex RTX 3090",
        image: "4.png",
        ram: 12,
        health: 4,
        active: true,
      },
      {
        name: "Cosmos GTX 1660 Super",
        image: "5.png",
        ram: 16,
        health: 4,
        active: false,
      },
    ],
  }),
  computed: {
    ...mapGetters(["computeNodes"]),
  },
};
</script>
