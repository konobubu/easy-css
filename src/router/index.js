import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Button from '../components/items/Buttons.vue'
import Card from '../components/items/Cards.vue'
import Headers from '../components/items/Headers.vue'
import Lists from '../components/items/Lists.vue'
import Texts from '../components/items/Texts.vue'

//ここにリンク先のファイルを読み込む

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/header',
    name: 'Header',
    component: Headers
  },
  {
    path: '/list',
    name: 'List',
    component: Lists
  },
  {
    path: '/text',
    name: 'Text',
    component: Texts
  },
  //ここにリンク先のパスを書く
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
