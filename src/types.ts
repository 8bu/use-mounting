import type {
  VNode,
  VNodeArrayChildren,
  VNodeProps,
  defineComponent,
} from 'vue'

export type Component = ReturnType<typeof defineComponent>

export type DestroyFn = () => void
export type MountFn = (config: {
  el: Component
  props?: VNodeProps & Record<string, any>
  children?: VNode | VNodeArrayChildren
}) => DestroyFn

export interface MountInstance {
  mount: MountFn
}
