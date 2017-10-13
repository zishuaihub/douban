import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Tab1 from '../pages/tab1.vue'
import Tab2 from '../pages/tab2.vue'
import Tab3 from '../pages/tab3.vue'
import Tab4 from '../pages/tab4.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:'/tab1',
      children:[
        {
          path: '/tab1',
          name: 'tab1',
          component: Tab1,
        },
        {
          path: '/tab2',
          name: 'tab2',
          component: Tab2,
        },
        {
          path: '/tab3',
          name: 'tab3',
          component: Tab3,
        },
        {
          path: '/tab4',
          name: 'tab4',
          component: Tab4,
        }
      ]
    }

  ]
})
