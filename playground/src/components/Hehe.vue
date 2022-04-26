<script>
export default defineComponent({
  name: 'Hehe',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <div class="border w-64 mx-auto p-4">
    Hehe
    <p>
      {{ msg }}
    </p>
    <hr>
    <slot />
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
