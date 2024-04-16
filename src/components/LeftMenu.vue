<template>
  <v-card class="flexcard d-flex" height="100%">
    <v-layout>
      <v-navigation-drawer permanent location="right" v-click-outside="hideDrawer">
        <template v-slot:prepend>
          <!-- prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg" -->
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            lines="two"
            title="Admin"
            subtitle="Logged in"
            value="user"
            to="/user"
          >
            <template v-slot:prepend>
              <v-avatar icon="mdi-account-circle"></v-avatar>
            </template>
          </v-list-item>
        </template>
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Dashboard"
            value="dashboard"
            to="/dashboard"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-import"
            title="Input sources"
            value="inputs"
            to="/inputs"
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-brain"
            title="Neural networks"
            value="networks"
            to="/neuralnetworks"
          >
          </v-list-item>
          <!-- <v-list-item
            prepend-icon="mdi-expansion-card"
            title="Compute Nodes"
            value="compute"
            to="/compute"
          >
          </v-list-item> -->
          <v-list-item
            prepend-icon="mdi-export"
            title="Output targets"
            value="outputs"
            to="/outputs"
          >
          </v-list-item>
          <!-- <v-list-item
            prepend-icon="mdi-database"
            title="Datasets"
            value="datasets"
            to="/datasets"
          >
          </v-list-item> -->
          <v-list-item
            prepend-icon="mdi-graph-outline"
            title="Prediction flows"
            value="prediction-flows"
            to="/flows"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-box"
            title="Accounts"
            value="accounts"
            to="/accounts"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-cog-outline"
            title="Settings"
            value="settings"
            to="/settings"
          ></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block to="/"> Logout </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main></v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
</script>

<script>
export default {
  data: () => ({}),
  methods: {
    hideDrawer() {
      console.log("CLICKED OUTSIDE")
    }
  }
};
</script>
