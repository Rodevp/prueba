import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Login from './components/login/Login.vue'
import Register from './components/register/Register.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: Login },
    { path: '/register', component: Register }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


createApp(App)
    .use(router)
    .mount('#app')
