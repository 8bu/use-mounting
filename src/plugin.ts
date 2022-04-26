import type { App, RendererElement } from 'vue'
import { h, render } from 'vue'
import type { MountFn, MountInstance } from './types'
import { MOUNTING_MODULE_PROVIDE_KEY } from './constants'

export const MountingPlugin = () => {
  let root: App

  const mount: MountFn = ({el, props, children}) => {
    const container: RendererElement = document.createDocumentFragment()
    let _el = h(el, props, children)
    _el.appContext = root._context
    render(_el, container as Element)
    root._container.appendChild(container)
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
      root = app
      app.config.globalProperties.$mounting = instance
      app.provide(MOUNTING_MODULE_PROVIDE_KEY, instance)
    },
  }
}
