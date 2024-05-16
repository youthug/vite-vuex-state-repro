import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter)

const staticRoutes = [
    {
        path: '/',
        component: () => import('../components/HelloWorld.vue')
    }
]

const createRouter = () =>
    new VueRouter({
        mode: 'history',
        routes: staticRoutes,
    })

const router = createRouter()

router.beforeEach((to, from, next) => {
    console.log('beforeEach', {to, from})
    store.commit('user/setName', 'vite-vuex-state-repro')
    store.commit('user/setRoles', ['admin'])
    next()
})

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router
