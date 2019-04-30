import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/homepage.vue'
import AboutUs from '@/views/aboutus.vue'
import News from '@/views/news.vue'
import NewsDetail from '@/views/newsDetail.vue'
import Production from '@/views/production.vue'
import Case from '@/views/case.vue'
import Resource from '@/views/resource.vue'
import Message from '@/views/message.vue'
import MatchUs from '@/views/matchus.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/aboutus/:id',
      name: 'aboutus',
      component: AboutUs
    },
    {
      path: '/news/:id',
      name: 'news',
      component: News
    },
    {
      path: '/newsDetail/:id/:num',
      name: 'newsDetail',
      component: NewsDetail
    },
    {
      path: '/production/:id',
      name: 'production',
      component: Production
    },
    {
      path: '/case/:id',
      name: 'case',
      component: Case
    },
    {
      path: '/resource/:id',
      name: 'resource',
      component: Resource
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/matchus',
      name: 'matchus',
      component: MatchUs
    }
  ]
})
