<script setup>
import { onUnmounted, ref } from 'vue'
import { useMounting } from '@8bu/use-mounting'

const { mount } = useMounting()

const counter = ref(1)
const programmatic = ref()
let destroyComp = null

onUnmounted(() => destroyComp?.())

const outerProps = computed(() => ({
  msg: `Message ${counter.value}`,
}))

const insert = async () => {
  destroyComp?.()
  destroyComp = mount({
    el: (await import('~/components/Hehe.vue')).default,
    props: outerProps,
    parent: programmatic.value,
    elContent: [
      {
        el: (await import('~/components/Hihi.vue')).default,
        props: {
          // msg: `Message ${counter.value + 50}`,
          onHehe: () => {
            console.log('onHehe')
            counter.value = counter.value + 5
            // destroyComp?.()
          },
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
    <p>
      Counter: {{ counter }}
    </p>
    <button class="rounded-lg px-4 py-1 bg-white text-blue-400" @click="insert">
      Insert component
    </button>
  </div>
</template>
