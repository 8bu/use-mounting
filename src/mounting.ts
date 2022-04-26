import { useMountInstance } from './instance'
import type { MountInstance } from './types'

export const useMounting = (): MountInstance => {
  return {
    mount: (...args) => {
      const { getInstance } = useMountInstance()
      return getInstance().value.mount(...args)
    },
  }
}
