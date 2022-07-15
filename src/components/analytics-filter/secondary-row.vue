<script lang="ts" setup>
import { ref } from "vue";

// const emit = defineEmits(["setView"]);
let selectedView = ref(1);

function onSetView(viewNum: number) {
  console.log("viewNum", viewNum);
  selectedView.value = viewNum;
  //   emit("setView", viewNum);
}

function isActiveView(viewNum: number) {
  return viewNum === selectedView.value;
}
</script>

<template>
  <div class="secondary-row space-between flex">
    <div class="view-btns">
      <button
        v-for="num in 4"
        :key="num"
        :class="{ active: isActiveView(num) }"
        @click="onSetView(num)"
      >
        View {{ num }}
      </button>
      <!-- <button @click="onSetView(1)" :class="{ active: isActiveView(1) }">
        View 1
      </button>
      <button @click="onSetView(2)" :class="{ active: isActiveView(2) }">
        View 2
      </button>
      <button @click="onSetView(3)">View 3</button>
      <button @click="onSetView(4)">View 4</button> -->
    </div>
    <div class="search-section flex align-center">
      <font-awesome-icon icon="fa-solid fa-file-import" />
      <div class="input-container flex align-center">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass icon" size="xs"/>
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  </div>
</template>
