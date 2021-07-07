import Vue from 'vue'
import VueRouter from "vue-router";

import Home from './components/Home.vue'
import Login from './components/Login.vue'
import PageNotFound from './components/PageNotFound.vue'
import AuthLayout from "@/components/layouts/AuthLayout";
import HomeLayout from "@/components/layouts/HomeLayout";
import ClientSettings from './components/ClientSettings.vue';
import OrganizationSettings from './components/OrganizationSettings.vue';

import store from "@/store/index";

Vue.use(VueRouter);

export const router = new VueRouter({
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
                    name:"home",
                    component: Home,
                },
                {
                    path: "client/:id",
                    name: "settings",
                    component: ClientSettings,
                    props:true
                },
                {
                    path: "client/:clientId/organization/:orgId",
                    name: "organization",
                    component: OrganizationSettings,
                    props:true
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
