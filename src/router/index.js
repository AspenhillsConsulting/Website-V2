import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },

    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/news/NewsIndexView.vue'),
    },

    {
      path: '/services/lod-400',
      name: 'services_lod-400',
      component: () => import('@/views/services/lod-400/Lod400IndexView.vue'),
    },

    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/projects/ProjectsIndexView.vue'),
    },

    {
      path: '/:pathMatch(.*)',
      name: 'notFound',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

export default router
