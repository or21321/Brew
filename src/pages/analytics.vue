<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import analyticsHeader from "../components/analytics-header.vue";
import analyticsFilter from "../components/analytics-filter/analytics-filter.vue";
import companyList from "../components/company-list.vue";
import { utilService } from "../services/util.service";

const route = useRoute();
const router = useRouter();

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

const companies = ref([
  {
    _id: utilService.makeId(),
    name: "Facebook",
    linkedinUrl: "linkedin.com",
    websiteUrl: "facebook.com",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/2048px-Smiley.svg.png",
  },
  {
    _id: utilService.makeId(),
    name: "Google",
    linkedinUrl: "linkedin.com",
    websiteUrl: "google.com",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/2048px-Smiley.svg.png",
  },
  {
    _id: utilService.makeId(),
    name: "Misterbit",
    linkedinUrl: "linkedin.com",
    websiteUrl: "https://www.misterbit.co.il/index.html",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/2048px-Smiley.svg.png",
  },
]);
</script>

<template>
  <main class="analytics-page grow main-layout">
    <analytics-header :analyticsTypes="analyticsTypes"></analytics-header>
    <analyticsFilter :filterSelects="filterSelects"></analyticsFilter>
    <section class="analytics-container flex">
      <company-list :companies="companies"></company-list>
      <div class="analytics-chart grow">
        Companies Chart
      </div>
    </section>
  </main>
</template>
