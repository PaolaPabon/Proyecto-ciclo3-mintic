import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/Nosotros',
    name: 'Nosotros',
    component: () => import('../views/Nosotros.vue')
  },
  {
    path: '/Programas',
    name: 'Programas',
    component: () => import('../views/Programas.vue')
  },
  
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/inscripcion',
    name: 'inscripcion',
    component: () => import('../views/Inscripcion.vue')
  },
  {
    path: '/Cuenta',
    name: 'Cuenta',
    component: () => import('../views/Cuenta.vue')
  },
  {
    path: '/Entrenadores',
    name: 'Entrenadores',
    component: () => import('../views/Entrenadores.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
