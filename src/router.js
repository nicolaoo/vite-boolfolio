import { createRouter, createWebHistory } from "vue-router";
import ChiSono from './pages/ChiSono.vue'
import Portfolio from './pages/Portfolio.vue'
import Home from './pages/Home.vue'
import ProjectShow from './pages/ProjectShow.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/chi-sono',
            name: 'chi-sono',
            component: ChiSono
        },
        {
            path: '/projectshow',
            name: 'projectshow',
            component: ProjectShow
        },
    ]
})

export { router }