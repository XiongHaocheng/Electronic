// router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../views/index.vue'),
    },
    {
        path: '/content',
        component: () => import('../views/content.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes, // 注意这里是 routes 而不是 routers
});

export default router;