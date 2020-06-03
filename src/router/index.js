import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import Content from '@/components/Content'
import Foot from '@/components/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components:{
        Header,
        Content,
        Foot
      }
    }
  ]
})
