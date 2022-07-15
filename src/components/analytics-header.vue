<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const props = defineProps(["analyticsTypes"]);

function onAddAnalyticType() {
  console.log("onAddAnalyticType(");
}

function isActiveType(name: string) {
  return route.query.type === name;
}
</script>

<template>
  <section class="analytics-header flex">
    <ul>
      <li
        v-for="a in props.analyticsTypes"
        :key="a._id"
        :class="{ active: isActiveType(a.name) }"
        @click="router.push(route.path + `?type=${a.name}`)"
      >
        {{ a.name }} Analysis
      </li>
    </ul>
    <button @click="onAddAnalyticType">+</button>
  </section>
</template>
