import { defineConfig } from "@doubleshot/runner"

export default defineConfig({
  run: [
    {
      cwd: 'packages/app',
      name: 'renderer',
      prefixColor: 'blue',
      commands: {
        dev: 'npm run dev',
        build: 'npm run build'
      }
    },
    {
      cwd: 'packages/api',
      name: 'electron',
      prefixColor: 'green',
      commands: {
        dev: {
          command: 'npm run dev',
          killOthersWhenExit: true
        },
        build: 'npm run build'
      }
    }
  ],
  electronBuild: {
    projectDir: 'packages/api',
    commandName: 'build',
    config: 'electron-builder.config.js'
  }
})