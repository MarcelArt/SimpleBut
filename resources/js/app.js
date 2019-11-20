require('./bootstrap');

import Vuetify from 'vuetify'
import axios from 'axios'
import router from './router'

import AppRoot from './AppRoot.vue'
const app = new Vue({
    el: '#app',
    router,
    components: {
        AppRoot
    }
});