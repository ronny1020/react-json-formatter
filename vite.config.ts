import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, pkg.source),
      fileName: 'index',
      name: pkg.name
    },
    minify: false,
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    sourcemap: true
  },
  plugins: [
    react({
      jsxRuntime: 'classic'
    }),
    dts({
      exclude: ['**/*.test.*', '**/*.stories.*'],
      include: ['src'],
      insertTypesEntry: true
    })
  ]
})
