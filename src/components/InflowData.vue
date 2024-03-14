<template>
  <v-infinite-scroll :height="300" :items="items" :onLoad="load">
    <template v-for="(item, index) in items" :key="item">
      <!-- <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']"> -->
      <div>Item #{{ item }}</div>
    </template>
  </v-infinite-scroll>
</template>

<script>
export default {
  data: () => ({
    items: [1],
  }),

  methods: {
    async api() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            Array.from({ length: 10 }, (k, v) => v + this.items.at(-1) + 1)
          );
        }, 10);
      });
    },
    async load({ done }) {
      // Perform API call
      const res = await this.api();

      this.items.push(...res);

      done("ok");
    },
  },
};
</script>
