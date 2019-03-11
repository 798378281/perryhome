import Vue from 'vue'
import Router from 'vue-router'
import * as RouteName from './route-name'


const Auth = () => import(/* webpackChunkName: "auth" */ '../views/auth/index.vue')
const Login = () => import(/* webpackChunkName: "auth" */ '../views/auth/login.vue')

const Apps = () => import(/* webpackChunkName: "apps" */ '../views/apps/index.vue')

const Journal = () => import(/* webpackChunkName: "apps" */ '../views/apps/journal/index.vue')
const JournalList = () => import(/* webpackChunkName: "apps" */ '../views/apps/journal/list.vue')
const JournalForm = () => import(/* webpackChunkName: "apps" */ '../views/apps/journal/form.vue')
const JournalDetails = () => import(/* webpackChunkName: "apps" */ '../views/apps/journal/details.vue')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: RouteName.HOME,
      redirect: { name: RouteName.LOGIN },
    },
    {
      path: '/auth',
      name: RouteName.AUTH,
      component: Auth,
      redirect: { name: RouteName.LOGIN },
      children: [
        {
          path: 'login',
          name: RouteName.LOGIN,
          component: Login
        }
      ]
    },
    {
      path: '/apps',
      name: RouteName.APPS,
      component: Apps,
      children: [
        {
          path: 'journal',
          name: RouteName.JOURNAL,
          component: Journal,
          children: [
            {
              path: 'list',
              name: RouteName.JOURNAL_LIST,
              component: JournalList
            },
            {
              path: 'add',
              name: RouteName.JOURNAL_FORM,
              component: JournalForm
            },
            {
              path: 'edit/:id',
              name: RouteName.JOURNAL_FORM,
              props: true,
              component: JournalForm
            },
            {
              path: 'details/:id',
              name: RouteName.JOURNAL_DETAIL,
              props: true,
              component: JournalDetails
            }
          ]
        },
      ]
    }
  ]
})
