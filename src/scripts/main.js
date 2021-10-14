"use strict"

import Vue from "vue"
import VueRouter from "vue-router"

// router configuration
// import { VueRouter, router } from "./../vue/router/router.js"


// components
import NavbarComponent from "./../../vue/modules/components/Navbar.vue"
import TaskComponent from "./../../vue/modules/components/Task.vue"


Vue.use(VueRouter)



// Components Bundle
const components = {
    "Navbar": NavbarComponent,
    "Task": TaskComponent
}

// App routes
const routes = [
    {
        path: "/login",
        name: "home",
        component: () => import("./../../vue/modules/pages/Login.vue")
    },
    {
        path: "/tasks",
        name: "tasks",
        component: () => import("./../../vue/modules/pages/Tasks.vue")
    }
]

const router = new VueRouter( { routes } )


const builderApp = {
    router, components
}



const app = new Vue(builderApp)

app.$mount("#app")