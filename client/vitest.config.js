import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      isolate: false,
      // you can also disable isolation only for specific pools
      poolOptions: {
        vmThreads: {
          isolate: false,
        },
      },
      fileParallelism: false,
      setupFiles: './tests/setupTests.js', // Path to your setup file
    }
  })
)
