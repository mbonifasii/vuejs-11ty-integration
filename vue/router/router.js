"use strict"

import VueRouter from "vue-router"


// App routes
const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./../modules/pages/Login.vue")
    },
    {
        path: "/tasks",
        name: "tasks",
        component: () => import("./../modules/pages/Tasks.vue")
    }
]

const router = new VueRouter( { routes } )

export default { VueRouter, router }