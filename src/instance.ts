import type { Ref } from 'vue'
import { ref } from 'vue'
import type { MountInstance } from './types'

const mountInstance = ref<MountInstance | null>(null)

export const useMountInstance = () => {
  const getInstance = () => {
    if (!mountInstance.value)
      throw new Error('Mounting module is not installed')
    return mountInstance as Ref<MountInstance>
  }
  const setInstance = (instance: MountInstance) => {
    mountInstance.value = instance
  }
  return {
    getInstance,
    setInstance,
  }
}
