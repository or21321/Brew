<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { computed, onMounted, watchEffect } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import analyticsHeader from "../components/analytics-header.vue";
import analyticsFilter from "../components/analytics-filter/analytics-filter.vue";
import companyList from "../components/company-list.vue";
import { utilService } from "../services/util.service";
import { useStore } from "../store";
import { CompanyAnalytic } from "../models/companyAnalytic.model";

const route = useRoute();
const router = useRouter();
const store = useStore();

const companies = computed(() => store.getters.companiesForDisplay);

onMounted(async () => {
  // Should also remove event listener on destroyed life cycle.
  window.addEventListener("resize", setMaxHeight);
  await store.dispatch({ type: "loadCompaniesAnalytics" });
  setMaxHeight();
});
// Data for chart:
const companiesAnalyticsSeries = computed(() => {
  const x = companies?.value?.map((company: CompanyAnalytic) => ({
    name: company.name,
    data: company.data,
  }));
  console.log(x);
  return x;
});

// **Should be done by store - dynamic per user
const analyticsTypes = ref([
  { name: "Market", _id: utilService.makeId() },
  { name: "Competitive", _id: utilService.makeId() },
]);

// Dynamic for each analytic type
const filterSelects = ref([
  {
    _id: utilService.makeId(),
    options: [
      { _id: utilService.makeId(), name: "Companies (All)", val: "ALL" },
    ],
  },
  {
    _id: utilService.makeId(),
    options: [{ _id: utilService.makeId(), name: "Topics (All)", val: "ALL" }],
  },
  {
    _id: utilService.makeId(),
    options: [
      { _id: utilService.makeId(), name: "Verticals (All)", val: "ALL" },
    ],
  },
]);
// Go to uses first analytic type, using query strings primarly for user experience.
watchEffect(() => {
  if (route.path === "/analytics" && !Object.keys(route.query).length) {
    console.log("Hello");
    router.push(route.path + `?type=${analyticsTypes.value[0].name}`);
  }
});

let chartOptions = {
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};
// Responsiveness for analytics-container by screen size:
const analyticsContainerRef = ref<null | Element>(null);

let maxHeight = ref<null | string>(null);

function setMaxHeight() {
  console.log("analyticsContainerRef.value", analyticsContainerRef.value);

  if (!analyticsContainerRef.value) return;

  let height: number | string =
    window.innerHeight -
    analyticsContainerRef?.value?.getBoundingClientRect().y -
    5;

  height = height + "px";

  maxHeight.value = height;
  console.log("maxHeight.value", maxHeight.value);
}
</script>

<template>
  <main class="analytics-page grow main-layout">
    <analytics-header :analyticsTypes="analyticsTypes"></analytics-header>
    <analyticsFilter :filterSelects="filterSelects"></analyticsFilter>
    <section
      v-if="companies"
      :style="{ maxHeight }"
      ref="analyticsContainerRef"
      class="analytics-container flex wrap"
    >
      <company-list :companies="companies"></company-list>
      <div class="chart-container grow">
        <apexchart
          :height="maxHeight"
          type="scatter"
          :options="chartOptions"
          :series="companiesAnalyticsSeries"
        ></apexchart>
      </div>
    </section>
    <div v-else>Loading...</div>
  </main>
</template>
