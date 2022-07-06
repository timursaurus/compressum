<template>
  <div class="relative h-full w-full">
    <div v-if="state === 'loading'">Editor is loading</div>
    <div v-else-if="state === 'error'">error</div>
    <div ref="target"></div>
  </div>
</template>
<script setup lang="ts">
import "../composables/useWorkers";
const target = ref();
const state = ref("loading");
</script>
