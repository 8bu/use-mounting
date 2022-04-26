import type {
  VNodeProps,
  defineComponent,
} from 'vue'

export type Component = ReturnType<typeof defineComponent>

export type DestroyFn = () => void
export interface MountFnConfig {
  el: Component
  props?: VNodeProps & Record<string, any>
  elContent?: ChildFnConfig[]
  parent?: Component
}
export type ChildFnConfig = Exclude<MountFnConfig, 'parent'>
export type MountFn = (config: MountFnConfig) => DestroyFn

export interface MountInstance {
  mount: MountFn
}
