import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from "vue-router";

import Home from './components/Home.vue'
import Login from './components/Login.vue'

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store(
    {
        state: {
            authenticated: localStorage.getItem("testLogin") == "true" ? true : false
        },
        mutations: {
            setAuthenticated(state, status) {
                state.authenticated = status;
            }
        }
    }
)

const router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/home",
            name: "home",
            component: Home,
            beforeEnter: (to, from, next) => {
                if (store.state.authenticated == false){
                    next("/login");
                } else{
                    next();
                }

            }
        },

    ]
})

new Vue({
    render: h => h(App),
    store: store,
    router: router
}).$mount('#app')
