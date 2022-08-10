const { join } = require('path')
function resolve(path) {
  return join(__dirname, path)
}

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  productName: 'Doubleshot App',
  directories: {
    output: resolve('dist'),
  },
  files: [
    resolve('packages/main/package.json'),
    {
      from: resolve('packages/main/dist'),
      to: 'main',
    },
    {
      from: resolve('packages/renderer/dist'),
      to: 'renderer',
    },
  ]
}

module.exports = config
