import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from "vue-router";

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import PageNotFound from './components/PageNotFound.vue'
import AuthLayout from "@/components/layouts/AuthLayout";
import HomeLayout from "@/components/layouts/HomeLayout";
import ClientSettings from './components/ClientSettings.vue'

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store(
    {
        state: {
            authenticated: localStorage.getItem("testLogin") == "true" ? true : false,
            api_user_id: "ui_app_account",
            api_key: "7d3f86cdd7b247eb8ae9a709170c5f6715e975f23ffb45a8a79019bafb53310e031d227a1e194b8d8b0252863de5940e8dc7d65ad15f4bda9ab159f9b5d6189c",
            ui_user_id: localStorage.getItem("ui_user_id")
        },
        mutations: {
            setAuthenticated(state, status) {
                state.authenticated = status;
            }
        }
    }
)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            component: AuthLayout,
            children: [
                {
                    path: '',
                    component: Login,
                },
            ],
            beforeEnter: (to, from, next) => {
                if (store.state.authenticated == true) {
                    next("/");
                } else {
                    next();
                }
            }
        },
        {
            path: '/',
            component: HomeLayout,
            children: [
                {
                    path: '',
                    component: Home,
                },
                {
                    path: "client/:id/settings",
                    name: "settings",
                    component: ClientSettings
                },
            ],
            beforeEnter: (to, from, next) => {
                if (store.state.authenticated == false) {
                    next("/login");
                } else {
                    next();
                }
            }
        },
        {
            path: '*',
            component: HomeLayout,
            children: [
                {
                    path: '',
                    component: PageNotFound,
                },
            ],
        },
    ],
});


new Vue({
    render: h => h(App),
    store: store,
    router: router
}).$mount('#app')
