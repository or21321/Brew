<script lang="ts" setup>
import companyPreview from "./company-preview.vue";

const props = defineProps(["companies"]);
</script>

<template>
  <ul class="companies-list grow">
    <company-preview
      v-for="company in props.companies"
      :key="company._id"
      :company="company"
    >
    </company-preview>
  </ul>
</template>
