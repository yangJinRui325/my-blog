import { App, defineAsyncComponent } from "vue"

// // 懒加载注册全局通用组件
const components = import.meta.glob('./*.vue')
function findName(str: string) {
  return str.replace(/(.*\/)*([^.]+).*/ig, "$2")
}

export default {
  install: (app: App): void => {
    for (const [path, component] of Object.entries(components)) {
      app.component(findName(path) as string, defineAsyncComponent(component))
    }
  }
}
