import { createRouter, createWebHashHistory, RouterView } from 'vue-router'
import Tr from "@/i18n/translation"
import CONFIG from "@/config"

import HomePage from "../views/HomePage.vue"
import PreSalePage from "../views/PreSalePage.vue"
import ReferralProgramPage from "../views/ReferralProgramPage.vue"
import RoadmapPage from "../views/RoadmapPage.vue"
import TokenomicsPage from "../views/TokenomicsPage.vue"
import InfoPage from "../views/InfoPage.vue"
import OurGoalsPage from "../views/OurGoalsPage.vue"

const router = createRouter({
  history: createWebHashHistory(CONFIG.VITE_BASE_URL),
  routes: [
    {
      path: "/:locale?",
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage
        },
        {
          path: 'goals',
          name: 'goals',
          component: OurGoalsPage
        },
        {
          path: 'presale',
          name: 'presale',
          component: PreSalePage
        },
        {
          path: 'referral',
          name: 'referral',
          component: ReferralProgramPage
        },
        {
          path: 'roadmap',
          name: 'roadmap',
          component: RoadmapPage
        },
        {
          path: 'tokenomics',
          name: 'tokenomics',
          component: TokenomicsPage
        },
        {
          path: 'about',
          name: 'about',
          component: InfoPage
        }
      ]
    }
  ]
})

export default router
