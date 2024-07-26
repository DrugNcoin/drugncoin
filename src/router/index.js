import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Tr from "@/i18n/translation"
import CONFIG from "@/config"

console.log(`${CONFIG.VITE_FALLBACK_LOCALE}  - default`)

const router = createRouter({
  history: createWebHistory(CONFIG.VITE_BASE_URL),
  routes: [
    {
      path: "/:locale?",
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomePage.vue')
        },
        {
          path: 'presale',
          name: 'presale',
          component: () => import('../views/PreSalePage.vue')
        },
        {
          path: 'referral',
          name: 'referral',
          component: () => import('../views/ReferralProgramPage.vue')
        },
        {
          path: 'roadmap',
          name: 'roadmap',
          component: () => import('../views/RoadmapPage.vue')
        },
        {
          path: 'tokenomics',
          name: 'tokenomics',
          component: () => import('../views/TokenomicsPage.vue')
        },
        {
          path: 'info',
          name: 'info',
          component: () => import('../views/InfoPage.vue')
        }
      ]
    }
  ]
})

export default router
