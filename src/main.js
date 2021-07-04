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
            authenticated: localStorage.getItem("testLogin") == "true" ? true : false,
            api_user_id: "ui_app_account",
            api_key:"7d3f86cdd7b247eb8ae9a709170c5f6715e975f23ffb45a8a79019bafb53310e031d227a1e194b8d8b0252863de5940e8dc7d65ad15f4bda9ab159f9b5d6189c",
            ui_user_id:localStorage.getItem("ui_user_id")
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
