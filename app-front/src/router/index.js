import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HelloWorld.vue'
import CadastrarEdicao from '../pages/CadastrarEdicao'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cadastrar-edicao',
    name: 'cadastrar edição',
    component: CadastrarEdicao,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
