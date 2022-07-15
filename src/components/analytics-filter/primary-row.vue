<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps(["filterSelects"]);
</script>

<template>
  <div class="primary-row-container full main-layout">
    <div class="primary-row space-between flex">
      <div class="selects-btns-container flex wrap">
        <div class="selects flex align-center">
          <select v-for="select in filterSelects" :key="select._id">
            <option
              v-for="option in select.options"
              :value="option.val"
              :key="option._id"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <div class="option-btns flex align-center">
          <button>Option 1</button>
          <button>Option 2</button>
        </div>
      </div>
      <div class="date-filter-section flex align-center">
        <select>
          <option value="1">Jan 01, 2020 - Future</option>
          <option value="2">Feb 01, 2020 - Future</option>
          <option value="3">Mar 01, 2020 - Future</option>
        </select>
        <font-awesome-icon icon="fa-solid fa-calendar" />
      </div>
    </div>
  </div>
</template>
