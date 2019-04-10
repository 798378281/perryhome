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

const System = () => import(/* webpackChunkName: "apps" */ '../views/apps/system/index.vue')
const SystemMetaData = () => import(/* webpackChunkName: "apps" */ '../views/apps/system/metadata/index.vue')
const SystemMetaDataCategory = () => import(/* webpackChunkName: "apps" */ '../views/apps/system/metadata/category-list.vue')
const SystemMetaDataTag = () => import(/* webpackChunkName: "apps" */ '../views/apps/system/metadata/tag-list.vue')


const Test = () => import(/* webpackChunkName: "apps" */ '../views/test/index.vue')

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
              // props: true,
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
        {
          path: 'system',
          name: RouteName.SYSTEM,
          component: System,
          children: [
            {
              path: 'metadata',
              name: RouteName.SYSTEM_METADATA,
              component: SystemMetaData,
              children: [
                {
                  path: 'category',
                  name: RouteName.SYSTEM_METADATA_CATEGORY,
                  component: SystemMetaDataCategory,
                },
                {
                  path: 'tag',
                  name: RouteName.SYSTEM_METADATA_TAG,
                  component: SystemMetaDataTag,
                }
              ]
            }
          ]
        },
        {
          path: 'test',
          name: RouteName.TEST,
          component: Test
        }
      ]
    }
  ]
})
