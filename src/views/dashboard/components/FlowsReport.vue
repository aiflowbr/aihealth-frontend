<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "vuetify";
import UiTitleCard from "@/components/UiTitleCard.vue";

const theme = useTheme();
const InfoColor = theme.current.value.colors.info;
const TextColor = theme.current.value.colors.primary;

const chartOptions1 = computed(() => {
  return {
    chart: {
      type: "bar",
      height: 100,
      fontFamily: `inherit`,
      foreColor: "white",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        borderRadius: 4,
      },
    },
    labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    colors: InfoColor,
    stroke: {
      curve: "smooth",
    },
    fill: {
      opacity: 0.6,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
    },
  };
});

// chart 1
const barChart1 = {
  series: [
    {
      name: "Inputs",
      data: [80, 95, 70, 42, 65, 55, 78],
    },
  ],
};
</script>

<template>
  <UiTitleCard
    title="Week statistics"
    class-name="pt-5 px-0 rounded-md overflow-hidden"
  >
    <div class="px-5">
      <h6 class="text-h6 text-lightText mb-4">Total inputs</h6>
      <h3 class="text-h3 mb-0">7.650</h3>
    </div>
    <apexchart
      id="weekstats"
      type="bar"
      height="300"
      :options="chartOptions1"
      :series="barChart1.series"
    >
    </apexchart>
  </UiTitleCard>
</template>

<style>
#weekstats .apexcharts-tooltip {
  color: #000000;
}

#weekstats .apexcharts-tooltip .apexcharts-tooltip-series-group.active {
  background: #ffffff !important;
}
</style>
