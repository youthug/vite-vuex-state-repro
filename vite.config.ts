import {defineConfig, PluginOption} from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'path'

const vuexStateHmr = (): PluginOption => {
  const importingRegEx = /(import.*store.*)/

  const updateState = (id: string) => `
  import.meta.hot.on('vite:beforeUpdate', (payload) => {
    if (payload.updates.some((u) => u.isWithinCircularImport)) {
      payload._state = { ...store.state }
    }
    console.log('----- before', '${id}', payload);
    console.log(store.getters);
  });
  import.meta.hot.on('vite:afterUpdate', (payload) => {
    console.log('----- after', '${id}', payload);
    if (payload._state) {
      store.replaceState(payload._state)
    }
    console.log(store.getters);
  });
  `

  return {
    name: 'vuexStateHmr',
    transform(code: string, id, ...args) {
      if (!code.match(importingRegEx)) return;
      console.log(args, code.replace(importingRegEx, `$1\n${updateState}`))
      return {
        code: code.replace(importingRegEx, `$1\n${updateState(id)}`),
        map: null,
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuexStateHmr(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
