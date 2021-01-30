import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const EmptyView = {
  name: 'EmptyView',
  render: h => h('router-view')
}

const routes = [
  {
    path: '/',
    component: () => import('../views/layout/app'),
    children: [
      {
        path: 'user',
        component: EmptyView,
        children: [
          {
            path: 'list',
            component: () => import('../views/user/list')
          },
          {
            path: 'detail',
            component: () => import('../views/user/item')
          },
        ]
      },
      {
        path: 'team',
        component: EmptyView,
        children: [
          {
            path: 'list',
            component: () => import('../views/team/list'),
          }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
