import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/home/index'
import login from '@/page/person/login'
import register from '@/page/person/register'
import person from '@/page/person/person'
import goods from '@/page/goods/goods'
import cart from '@/page/cart/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/page/person/login',
      name: 'login',
      component: login
    },
    {
    	path:'/page/person/register',
    	name:'register',
    	component:register
    },
    {
    	path:'/page/person/person',
    	name:'person',
    	component: person
    },
    {
    	path:'/page/goods/goods',
    	name:"goods",
    	component:goods
    },
    {
    	path:'/page/cart/cart',
    	name:"cart",
    	component:cart
    }
  ]
})
