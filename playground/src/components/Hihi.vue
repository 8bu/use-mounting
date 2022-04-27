<script>
export default defineComponent({
  name: 'Hihi',
  props: {
    msg: {
      type: String,
      default: 'Hello world'
    },
  },
})
</script>

<template>
  <div class="border border-yellow-500 w-52 my-4 mx-auto p-4">
    Hihi
    <p>
      {{ msg }}
    </p>
    <button border rounded py-1 text-sm px-4 my-4 @click="$emit('hehe')">
      Test
    </button>
  </div>
</template>
