import { defineConfig } from "@doubleshot/runner"

export default defineConfig({
  run: [
    {
      cwd: 'packages/renderer',
      name: 'renderer',
      prefixColor: 'blue',
      commands: {
        dev: 'pnpm run dev',
        build: 'pnpm run build'
      }
    },
    {
      cwd: 'packages/main',
      name: 'main',
      prefixColor: 'green',
      commands: {
        dev: {
          command: 'pnpm run dev',
          killOthersWhenExit: true
        },
        build: 'pnpm run build'
      }
    }
  ],
  electronBuild: {
    projectDir: 'packages/main',
    commandName: 'build',
    config: 'electron-builder.config.js'
  }
})