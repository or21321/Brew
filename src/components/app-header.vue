<script lang="ts" setup>
import logo from "./logo.vue";
</script>

<template>
  <header class="app-header flex">
    <nav class="flex">
      <logo></logo>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link to="/analytics">Analytics</router-link>
    </nav>
  </header>
</template>