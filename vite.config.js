import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"

// https://vitejs.dev/config/
export default ({command, mode}) => {
  let isProd = (command === 'serve') // 情景配置 是否为开发模式  serve 或 build
  return defineConfig({
    // 配置需要使用的插件列表
    plugins: [vue()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"), // 设置为@ 则使用时为 "@/components/xxxx"
      },
    },
    // css预处理器
    css: {
      preprocessorOptions: {
        less: {
          charset: false,
          additionalData: '@import "./src/assets/style/index.less";',
        },
      },
    },
    // 本地运行配置，及反向代理配置
    server: {
      host: 'localhost', // 指定服务器主机名
      port: 8888, // 指定服务器端口
      open: true, // 在服务器启动时自动在浏览器中打开应用程序
      https: false, // 是否开启 https
    },
  })
}
