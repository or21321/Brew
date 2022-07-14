<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import appHeader from "./components/app-header.vue";
</script>

<template>
  <app-header class="main-layout"></app-header>
  <router-view class="main-layout"></router-view>
</template>

