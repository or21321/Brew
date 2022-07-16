<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from "@vue/reactivity";
import { utilService } from "./services/util.service";
import appHeader from "./components/app-header.vue";
import { watchEffect } from "@vue/runtime-core";

// Dynamic. *Probably for app-header links could just use template - no need for dynamic.
const headerNavLinks = ref([
  { name: "Home", _id: utilService.makeId() },
  { name: "Analytics", _id: utilService.makeId() },
]);
</script>

<template>
  <app-header :headerNavLinks="headerNavLinks"></app-header>
  <router-view></router-view>
</template>

