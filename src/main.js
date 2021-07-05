import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from "vue-router";

import {store} from "@/store/store";
import {router} from "@/routes";

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
