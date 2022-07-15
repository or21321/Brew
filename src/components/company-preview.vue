<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps(["company"]);
</script>

<template>
  <li class="company-preview flex">
    <div class="img-name-container flex align-center">
      <img :src="props.company.imgUrl" />
      <span>{{ props.company.name }}</span>
    </div>
    <div class="links-container">
        
    </div>
  </li>
</template>
