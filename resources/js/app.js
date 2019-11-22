window.Vue = require('vue');

import Vuetify from 'vuetify'
import axios from 'axios'
import router from './router'

window.EventBus = new Vue()
window.axios = axios.create()


Vue.use(Vuetify, {
    iconfont: 'md',
    // override colors
    theme: {
        primary: "#3F51B5",
    }
});

import User from './components/helpers/User'
Vue.prototype.$user = User;

import AppRoot from './AppRoot.vue'
const app = new Vue({
    el: '#app',
    Vuetify,
    router,
    components: {
        AppRoot
    }
});