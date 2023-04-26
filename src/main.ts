import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Login from './components/login/Login.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: Login }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


createApp(App)
    .use(router)
    .mount('#app')
