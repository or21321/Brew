<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { onMounted, watchEffect } from "@vue/runtime-core";
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

const companies = ref<null | CompanyAnalytic[]>(null);
onMounted(async () => {
  // store.dispatch({ type: "loadCompaniesAnalytics" });
  companies.value = await store.dispatch({ type: "loadCompaniesAnalytics" });
  console.log('companies.value', companies.value);
  
});

// **Should be done by store
const analyticsTypes = ref([
  { name: "Market", _id: utilService.makeId() },
  { name: "Competitive", _id: utilService.makeId() },
]);

watchEffect(() => {
  if (route.path === "/analytics" && !Object.keys(route.query).length) {
    console.log("Hello");
    router.push(route.path + `?type=${analyticsTypes.value[0].name}`);
  }
});

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

// console.log(companies.value);

let chartOptions = {
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
};

let series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91],
  },
  {
    name: "series-2",
    data: [37, 47, 37, 50, 47, 67, 70, 91],
  },
];

const list = ref<null | Element>(null);

let maxHeight = ref<null | string>(null);

function setMaxHeight() {
  if (!list.value) return;
  let height: number | string =
    window.innerHeight - list?.value?.getBoundingClientRect().y - 5;
  console.log(height);
  height = height + "px";
  maxHeight.value = height;
}

onMounted(() => {
  setMaxHeight();
  window.addEventListener("resize", setMaxHeight);
});
</script>

<template>
  <main class="analytics-page grow main-layout">
    <analytics-header :analyticsTypes="analyticsTypes"></analytics-header>
    <analyticsFilter :filterSelects="filterSelects"></analyticsFilter>
    <section
      v-if="companies"
      :style="{ maxHeight }"
      ref="list"
      class="analytics-container flex wrap"
    >
      <company-list :companies="companies"></company-list>
      <apexchart
        class="grow"
        type="scatter"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </section>
    <div v-else>Loading...</div>
  </main>
</template>
