import type { VNode } from 'vue'
import { h } from 'vue'
import type { ChildFnConfig } from './types'

export const childrenToVNode = (children: ChildFnConfig): VNode => {
  const { el, props, elContent } = children
  const vNode = h(el, props, elContent?.map(childrenToVNode))
  return vNode
}
