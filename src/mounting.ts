import { inject } from 'vue'
import { MOUNTING_MODULE_PROVIDE_KEY } from './constants'
import type { MountInstance } from './types'

export const useMounting = (): MountInstance => {
  const getInstance = () => {
    const instance = inject<MountInstance>(MOUNTING_MODULE_PROVIDE_KEY)
    if (!instance)
      throw new Error('Mounting module is not installed')
    return instance
  }

  return {
    mount: (...args) => {
      const instance = getInstance()
      return instance?.mount(...args)
    },
  }
}
