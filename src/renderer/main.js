import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import axios from 'axios'

import App from './App'
import router from './router'

import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.use(VueYoutube)
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
    components: {App},
    router,
    template: '<App/>'
}).$mount('#app');
