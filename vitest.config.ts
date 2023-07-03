import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      branches: 60,
      functions: 60,
      lines: 60,
      reporter: ['text', 'json-summary', 'json'],
      statements: 60
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts']
  }
})
