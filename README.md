# @8bu/use-mounting

Programmatic mount your Vue component

[![npm version](https://img.shields.io/npm/v/@8bu/use-mounting?style=for-the-badge)](https://www.npmjs.com/package/@8bu/use-mounting)
[![npm license](https://img.shields.io/npm/l/@8bu/use-mounting?style=for-the-badge)](https://github.com/8bu/@8bu/use-mounting/blob/main/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@8bu/use-mounting?style=for-the-badge)](https://bundlephobia.com/result?p=@8bu/use-mounting)
[![npm](https://img.shields.io/npm/dm/@8bu/use-mounting?style=for-the-badge)](https://www.npmjs.com/package/@8bu/use-mounting)

## Background

I want to clone the programmatic modal of Buefy. So I created this thing.
You can use it in the same situation like programmatic modal of Buefy does:

- Open your modal/dialog by function, with custom template/component
- Push new notification/snackbar by function, with custom template

## Usage

### Install

```bash
# NPM
npm i @8bu/use-mounting
# PNPM
pnpm i @8bu/use-mounting
# YARN
yarn add @8bu/use-mounting
```

### Config `main.ts`

```typescript
import { MountingPlugin } from '@8bu/use-mounting'

// provide mounting instance to lower level components
app.use(MountingPlugin());
```

## Quick start

`Hehe.vue`

```Vue

<script>
export default defineComponent({
  name: 'Hehe',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <div class="border w-64 mx-auto p-4">
    Hehe
    <p>
      {{ msg }}
    </p>
    <hr>
    <slot />
  </div>
</template>

```

`Hihi.vue`

```Vue

<script>
export default defineComponent({
  name: 'Hihi',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <div class="border border-yellow-500 w-52 my-4 mx-auto p-4">
    Hihi
    <p>
      {{ msg }}
    </p>
  </div>
</template>

```

`App.vue`

```Vue
<script setup>
import { onUnmounted, ref } from 'vue'
import { useMounting } from '@8bu/use-mounting'

const { mount } = useMounting()

const counter = ref(1)
const programmatic = ref()
let destroyComp = null

onUnmounted(() => destroyComp?.())

const insert = async() => {
  destroyComp?.()
  destroyComp = mount({
    el: (await import('~/components/Hehe.vue')).default,
    props: {
      key: counter,
      msg: `Message ${counter.value++}`,
    },
    parent: programmatic.value,
    elContent: [
      {
        el: (await import('~/components/Hihi.vue')).default,
        props: {
          key: counter,
          msg: `Message ${counter.value + 50}`,
        },
      },
    ],
  })
}
</script>
<template>
  <div class="p-4">
    <div ref="programmatic" class="border border-orange-500 my-4 p-10">
      <span class="mb-4 font-mono">
        ref="programmatic"
      </span>
    </div>
    <button class="rounded-lg px-4 py-1 bg-white text-blue-400" @click="insert">
      Insert component
    </button>
  </div>
</template>

```

## Config

### Hook

```typescript
import { useMounting } from '@8bu/use-mounting'
const { mount } = useMounting()

const destroyMounted = mount(config)

// Execute to destroy the mounted component
destroyMounted()
```

### Hook config

__The interface__

```ts
interface MountFnConfig {
  el: Component
  props?: (VNodeProps & Record<string, any>) | Ref<VNodeProps & Record<string, any>>
  elContent?: ChildFnConfig[]
  parent?: Component
}
export type ChildFnConfig = Exclude<MountFnConfig, 'parent'>
```

__Config object cheatsheet__

| Key        | Description                                                               | Type             | Required  | Default value         |
|----------- |-------------------------------------------------------------------------- |----------------- |---------- |---------------------- |
| el         | Component that you want to mount                                          | Vue Component    | Yes       | -                     |
| props      | Passing props to `el` component, use ref() if your props is gonna change  | Object \| Ref    | No        | -                     |
| parent     | Place to mount your component                                             | Template Ref     | No        | Root container (App)  |
| elContent  | Array - Same as hook config, but without parent                           | MountFnConfig[]  | No        | -                     |

## License

[MIT](./LICENSE) License © 2022 [8bu](https://github.com/8bu)
