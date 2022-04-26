<script>
export default defineComponent({
  name: 'Hihi',
  props: {
    msg: {
      type: String,
      required: true,
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
  </div>
</template>
