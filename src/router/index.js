import { createRouter, createWebHistory } from 'vue-router'
import TableVue from '../views/Table.vue'
import DashboardVue from '../views/Dashboard.vue'
import ProfileVue from '@/views/Profile.vue'
import BlankPageVue from '@/views/BlankPage.vue'
import NotFoundVue from '@/views/NotFound.vue'

// Authentication...
import SignInVue from '@/views/Auth/SignIn.vue'
import SignUpVue from '@/views/Auth/SignUp.vue'
import ForgotPasswordVue from '@/views/Auth/ForgotPassword.vue'
import ResetPasswordVue from '@/views/Auth/ResetPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardVue
    },
    {
      path: '/table',
      name: 'table',
      component: TableVue
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileVue
    },
    {
      path: '/blank-page',
      name: 'blank_page',
      component: BlankPageVue
    },
    {
      path: '/404',
      name: 'not_found',
      component: NotFoundVue
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInVue
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpVue
    },
    {
      path: '/forgot-password',
      name: 'forgot_password',
      component: ForgotPasswordVue
    },
    {
      path: '/reset-password',
      name: 'reset_password',
      component: ResetPasswordVue
    }
  ]
})

export default router
