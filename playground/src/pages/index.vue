<script setup>
import { onUnmounted, ref } from 'vue'
import { useMounting } from '@8bu/use-mounting'

const { mount } = useMounting()

const counter = ref(1)
const programmatic = ref()
let destroyComp = null

onUnmounted(() => destroyComp?.())

const insert = async() => {
  destroyComp?.()
  destroyComp = mount({
    el: (await import('~/components/Hehe.vue')).default,
    props: {
      key: counter,
      msg: `Message ${counter.value++}`,
    },
    parent: programmatic.value,
    elContent: [
      {
        el: (await import('~/components/Hihi.vue')).default,
        props: {
          key: counter,
          msg: `Message ${counter.value + 50}`,
        },
      },
    ],
  })
}
</script>
<template>
  <div class="p-4">
    <div ref="programmatic" class="border border-orange-500 my-4 p-10">
      <span class="mb-4 font-mono">
        ref="programmatic"
      </span>
    </div>
    <button class="rounded-lg px-4 py-1 bg-white text-blue-400" @click="insert">
      Insert component
    </button>
  </div>
</template>
