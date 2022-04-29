<script setup lang="ts">
const emit = defineEmits(['close'])

</script>

<template>
  <div class="modal">
    <h1 class="text-center text-xl">
      Hello world
    </h1>
    <button @click="emit('close')">
      Close
    </button>
  </div>
</template>