// router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('../views/index.vue'),
    },
    {
        path: '/content',
        component: () => import('../views/content.vue'),
    },
    {
        path: '/login',
	    name: 'Login',
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/register',
	    name: 'Register',
        component: () => import('../views/Register.vue'),
    },
    {
        path: '/content',
	    name: 'Content',
        component: () => import('../views/Content.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes, 
});

export default router;