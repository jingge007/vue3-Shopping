import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// import axios from "@/utils/axios.config";

const app = createApp(App)
// app.config.globalProperties.$h = axios;

app.use(store).
use(router).
use(Antd).
mount('#app')
