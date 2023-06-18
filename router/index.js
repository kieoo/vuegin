import Vue from "vue";
import HelloWorld from "@/components/HelloWorld";
import ApiData from "@/components/ApiData";
import LCVideo from "@/components/LCVideo";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'HelloWorld',
                component: HelloWorld
            },
            {
                path: '/xxb',
                name: 'ApiData',
                component: ApiData
            },
            {
                path: '/video',
                name: 'LCVideo',
                component: LCVideo
            }
        ]
})