import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import features from '@/composables/Features'

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
      path: '/services',
      name: 'services',
      component: () => import('@/views/services/ServicesIndexView.vue'),
    },

    {
      path: '/services/lod-400',
      name: 'services_lod-400',
      component: () => import('@/views/services/lod-400/Lod400IndexView.vue'),
    },

    {
      path: '/services/lidar-scanning',
      name: 'services_lidar_scanning',
      component: () => import('@/views/services/lidar-scanning/LidarScanningIndexView.vue'),
    },

    {
      path: '/services/owner-facilities-management',
      name: 'services_facilities_management',
      component: () =>
        import(
          '@/views/services/owner-facilities-management/OwnerFacilitiesManagementIndexView.vue'
        ),
    },

    {
      path: '/services/clash-coordination-leadership',
      name: 'services_clash_coordination_leadership',
      component: () =>
        import(
          '@/views/services/clash-coordination-leadership/ClashCoordinationLeadershipIndexView.vue'
        ),
    },

    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/projects/ProjectsIndexView.vue'),
      beforeEnter: () => features.value.projects.enabled,
    },

    {
      path: '/:pathMatch(.*)',
      name: 'notFound',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

export default router
