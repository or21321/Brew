<script lang="ts" setup>
import primaryRow from "./primary-row.vue";
import secondaryRow from "./secondary-row.vue";

const props = defineProps(["filterSelects"]);
</script>

<template>
  <section class="analytics-filter full main-layout">
    <primary-row :filterSelects="props.filterSelects"></primary-row>
    <secondary-row></secondary-row>
  </section>
</template>
