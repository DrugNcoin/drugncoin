import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TokenomicsPage from '../views/TokenomicsPage.vue'
import RoadmapPage from '../views/RoadmapPage.vue'
import PreSalePage from '../views/PreSalePage.vue'
import ReferralProgramPage from '../views/ReferralProgramPage.vue'
import InfoPage from '../views/InfoPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/tokenomics', name: 'Tokenomics', component: TokenomicsPage },
  { path: '/roadmap', name: 'Roadmap', component: RoadmapPage },
  { path: '/presale', name: 'PreSale', component: PreSalePage },
  { path: '/referral', name: 'ReferralProgram', component: ReferralProgramPage },
  { path: '/info', name: 'Info', component: InfoPage }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
