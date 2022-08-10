Шаблон для использования [Vue.js](https://vuejs.org/) и [Vite](https://vitejs.dev/) для фронта и [NestJS](https://nestjs.com/) в [Electron](https://www.electronjs.org/) для бека (в основном процессе). На основе [**DoubleShot**](https://github.com/Doubleshotjs/doubleshot).

## 
Используйте [pnpm](https://pnpm.io/)
  ```sh
  # установить зависимости
  pnpm install
  
  # запустить в режиме разработки
  pnpm dev
  
  # запустить продакшн-билд
  pnpm run build
  ```

## Структура
```sh
  ├─┬ packages
  │ ├── api                   # backend/main process
  │ └── app                   # frontend/renderer process
  ├── electron-builder.config.js
  ├── package.json
  └── dsr.config.ts           # @doubleshot/runner config
```