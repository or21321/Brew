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
        class="flex align-center"
        v-for="link in props.headerNavLinks"
        :to="{ name: link.name }"
        :key="link._id"
        ><span>{{ link.name }}</span></router-link
      >
    </nav>
  </header>
</template>