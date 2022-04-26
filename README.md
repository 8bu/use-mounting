# @8bu/use-mounting

[![NPM version](https://img.shields.io/npm/v/@8bu/use-mounting?color=a1b858&label=)](https://www.npmjs.com/package/@8bu/use-mounting)

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
import { MountingModule } from '@8bu/use-mounting'

// provide mounting instance to lower level components
app.use(MountingModule());
```

## Quick start

```Vue
<template>
  <div class="home">
    <button @click="insert">Insert component</button>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useMounting } from '@8bu/use-mounting'

const { mount } = useMounting()

let counter = ref(1)
let destroyComp = null

onUnmounted(() => destroyComp?.())

const insert = async () => {
  destroyComp?.()
  destroyComp = mount({
    el: (await import('@/components/HelloWorld.vue')).default,
    props: {
      key: counter,
      msg: 'Message ' + counter.value++,
    },
  })
}
</script>

```


## License

[MIT](./LICENSE) License © 2022 [8bu](https://github.com/8bu)
