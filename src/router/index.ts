import { createRouter, createWebHashHistory, type RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        meta: {
            alive: true
        },
        redirect: (to) => {
            console.log(to)
            return '/home' 
        }
    },
    {
        path: '/login',
        name:'login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            alive: true
        },
        component: () => import('@/views/home/index.vue')
    },{
        path: '/product',
        name: 'product',
        meta: {
            alive: true
        },
        component: () => import('@/views/product/index.vue')
    }
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    next()
})