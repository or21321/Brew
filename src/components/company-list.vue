<script lang="ts" setup>
import companyPreview from "./company-preview.vue";

const props = defineProps(["companies"]);
</script>

<template>
  <ul class="company-list grow">
    <div class="column-titles">
      <span>Rank</span>
      <span>Name</span>
    </div>
    <company-preview
      v-for="(company, idx) in props.companies"
      :key="company._id"
      :company="company"
      :rank="idx + 1"
    >
    </company-preview>
  </ul>
</template>
