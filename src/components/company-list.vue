<script lang="ts" setup>
import { Ref, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import companyPreview from "./company-preview.vue";

const props = defineProps(["companies"]);
console.log("props.companies", props.companies);
</script>

<template>
  <div class="company-list-container grow">
    <div class="column-titles">
      <span>Rank</span>
      <span>Name</span>
    </div>
    <ul class="company-list">
      <company-preview
        v-for="(company, idx) in props.companies"
        :key="company._id"
        :company="company"
        :rank="idx + 1"
      >
      </company-preview>
    </ul>
  </div>
</template>
