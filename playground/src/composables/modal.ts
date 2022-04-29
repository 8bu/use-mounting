import 'element-plus/es/components/dialog/style/css'
import { ElDialog } from 'element-plus'
import type { Component } from '@8bu/use-mounting'
import { useMounting } from '@8bu/use-mounting'
import type { Ref } from 'vue'

export interface ModalOpenConfigDefault {
  visible: Ref<boolean>
  content: Component
  props?: Record<string, any>
}
export type ModalOpenConfig = ModalOpenConfigDefault & Record<string, any>

export function useModal(config: ModalOpenConfig) {
  const { content, props, visible, ...dialogOptions } = config
  const { mount } = useMounting()

  const dialogProps = computed(() => ({
    modelValue: visible.value,
    ...dialogOptions,
  }))

  const open = async() => {
    visible.value = true
    mount({
      el: ElDialog,
      props: dialogProps,
      elContent: [
        {
          el: content,
          props: {
            ...props,
          },
        },
      ],
    })
  }

  return {
    open,
  }
}
