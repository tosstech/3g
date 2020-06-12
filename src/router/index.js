import Vue from 'vue'
import Router from 'vue-router'

import Knowledge from '@/view/knowledge/index'
import Case from '@/view/case/index'
import Live from '@/view/live/index'
import Lease from '@/view/lease/index'
import Me from '@/view/me/index'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/knowledge',
      component:Knowledge,
    },
    {
      path: '/case',
      component:Case,
    },
    {
      path: '/live',
      component:Live,
    },
    {
      path: '/lease',
      component:Lease,
    },
    {
      path: '/me',
      component:Me,
    },
  ]
})
