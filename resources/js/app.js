window.Vue = require('vue')

import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'
import router from './router'

import AppRoot from './AppRoot'

window.EventBus = new Vue()
window.axios = axios.create()


const app = new Vue({
    el: '#app',
    router,
    components: {
        AppRoot
    }
});

Vue.use(Vuetify, {
    iconfont: 'md',
    // override colors
    theme: {
        primary: "#ff5722",
    }
});