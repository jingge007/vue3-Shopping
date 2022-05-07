import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from "@/utils/axios.config";

const app = createApp(App)
// app.config.globalProperties.$h = axios;

app.use(store).use(router).mount('#app')
