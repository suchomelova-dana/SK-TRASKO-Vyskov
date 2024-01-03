import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import {CompetitionType} from "@/interfaces/enums"
import ZavodyPage from '../views/ZavodyPage.vue'
import ZavodySelection from '../components/Zavody/ZavodySelection.vue'
import ZavodyDetail from '../components/Zavody/ZavodyDetail.vue'
import ProClenyLogin from '../views/ProClenyLogin.vue'
import ProClenyProtected from '../views/ProClenyProtected.vue'
import ProClenyPage from '../views/ProClenyPage.vue'
import OOddiluPage from '../views/OOddilu.vue'
import KalendarPage from '../views/KalendarPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/o_oddilu',
    name: 'o_oddilu',
    component: OOddiluPage
  },
  {
    path: '/zavody',
    name: 'zavody',
    component: ZavodyPage,
    children: [
      {
        path: '',
        component: ZavodySelection,
        props: {competitions: null, compType: CompetitionType.jednotlivci, year: 2023}
      },
      {
        path: 'zavodyJednotlivci',
        component: ZavodyDetail,
        props: {competitions: null, compType: CompetitionType.jednotlivci, year: 2023}
      },
      {
        path: 'zavodySpolecneSkladby',
        component: ZavodyDetail,
        props: {competitions: null, compType: CompetitionType.spolecky, year: 2023},

      },
      {
        path: 'zavodyESG',
        component: ZavodyDetail,
        props: {competitions: null, compType: CompetitionType.esg, year: 2023}
      },
    ]
  },
  {
    path: '/kalendar',
    name: 'kalendar',
    component: KalendarPage,
  },
  {
    path: '/pro_cleny',
    name: 'pro_cleny',
    component: ProClenyPage,
    children: [
      {
        path: '',
        name: 'pro_cleny_protected',
        component: ProClenyProtected,
        meta:{
          requiresAuth: true
        }
      },
      {
        path: 'login',
        name: 'pro_cleny_login',
        component: ProClenyLogin,
      }
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(document.cookie.indexOf('SKTraskoCookie=') === -1){
      next('pro_cleny/login');
    }
    else{
      next()
    }
  }
  else {
    next();
  }
})

export default router


