<template>
  <div>
    <h1 class="text-2xl font-bold">Hi</h1>
  </div>
</template>

<script setup lang="ts">
const kek = await $fetch("/api/minifiers/esbuild", {
  method: "post",
});
console.log(kek);
onMounted(async () => {
  const format = await $fetch("/api/format", {
    method: "POST",
    body: {
      code: "function kek   () { return 1; }",
    },
  });
  console.log("format", format);
});
</script>
