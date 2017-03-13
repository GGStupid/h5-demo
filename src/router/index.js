import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: 
      {'vcontent':index}
    },
    {
    	path:'/topic/create',
    	components: 
    	{'vcontent':resolve => require(['../pages/createtopic.vue'], resolve)}
    },
    {
    	path:'/my/messages',
    	components:
    	{'vcontent':resolve => require(['../pages/message.vue'], resolve)}
    },
    {
    	path:'/my/home',
    	components:
    	{'vcontent':resolve => require(['../pages/my.vue'], resolve)}
    }
  ]
})
