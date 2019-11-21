import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    // {
    //     path: '/', component: () => import('./AppRoot.vue' /* webpackChunkName: "js/App-Root" */)
    // },
    {
        path: '/', component: () => import('./components/Home.vue' /*webpackChunkName: "js/Home.vue" */)
    }
]

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history',
})
export default router;