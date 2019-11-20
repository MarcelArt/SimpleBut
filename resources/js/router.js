import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        path: '/', 
        component: () => import('./components/HomeComponent')
    },

]

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history',
})

export default router;