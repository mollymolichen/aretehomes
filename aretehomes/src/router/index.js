import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import About from '../components/About'
import Story from '../components/Story'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/our-story',
      name: 'Our Story',
      component: Story
    }
  ]
})
