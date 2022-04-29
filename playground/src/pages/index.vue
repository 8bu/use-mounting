<script lang="ts" setup>
import { useModal } from '~/composables/modal'
import ModalContent from '~/components/ModalContent.vue'

const modalVisible = ref(false)

const { open } = useModal({
  content: ModalContent,
  visible: modalVisible,
  props: {
    onClose: () => {
      modalVisible.value = false
    },
  },
})

</script>

<template>
  <div class="p-4">
    <button class="rounded-lg px-4 py-1 bg-white text-blue-400" @click="open">
      Open modal
    </button>
  </div>
</template>
