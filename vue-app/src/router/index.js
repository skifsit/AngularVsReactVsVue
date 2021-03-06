import Vue from 'vue'
import Router from 'vue-router'
import Empty from '@/components/Empty'
import UsersList from '@/components/UsersList'
import UserDetail from '@/components/UserDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Empty
    },
    {
      path: '/users/list',
      component: UsersList
    },
    {
      path: '/users/:userId',
      component: UserDetail
    }
  ]
})
