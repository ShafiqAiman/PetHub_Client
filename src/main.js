import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://pethub-api.azurewebsites.net'
// To connect with django server

createApp(App).use(store).use(router, axios).mount('#app')
