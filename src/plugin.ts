import type { App, RendererElement } from 'vue'
import { h, render } from 'vue'
import type { MountFn, MountInstance } from './types'
import { useMountInstance } from './instance'
import { childrenToVNode } from './helper'

export const MountingPlugin = () => {
  let root: App

  const mount: MountFn = ({ el, props, elContent, parent }) => {
    const container: RendererElement = document.createDocumentFragment()
    let _el = h(el, props, elContent?.map(childrenToVNode))
    _el.appContext = root._context
    render(_el, container as Element);
    (parent || root._container).appendChild(container)
    const destroy = () => {
      render(null, container as Element)
      _el = undefined as unknown as any
    }
    return destroy
  }

  const instance: MountInstance = {
    mount,
  }

  return {
    install(app: App) {
      const { setInstance } = useMountInstance()
      root = app
      app.config.globalProperties.$mounting = instance
      setInstance(instance)
    },
  }
}
