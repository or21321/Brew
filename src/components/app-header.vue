<script lang="ts" setup>
import logo from "./logo.vue";

const props = defineProps(["headerNavLinks"]);

console.log("props", props);
</script>

<template>
  <header class="app-header main-layout flex">
    <nav class="flex">
      <logo></logo>
      <router-link
        v-for="link in props.headerNavLinks"
        :to="{ name: link.name }"
        :key="link._id"
        >{{ link.name }}</router-link
      >
    </nav>
  </header>
</template>