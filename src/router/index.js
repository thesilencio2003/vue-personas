import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Comunas from '@/views/Comunas.vue'
import Departamentos from '@/views/Departamentos.vue'
import EditarComuna from '@/components/EditarComuna.vue'
import NewComuna from '@/components/NewComuna.vue'
import EditarMunicipio from '@/components/EditarMunicipio.vue'
import NewMunicipio from '@/components/NewMunicipio.vue'
import Municipios from '@/views/Municipios.vue'
import NewDepartamento from '@/components/NewDepartamento.vue'
import EditarDepartamento from '@/components/EditarDepartamento.vue'
import Paises from '@/views/Paises.vue'
import NewPais from '@/components/NewPais.vue'
import EditarPais from '@/components/EditarPais.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/comunas',
    name: 'Comunas',
    component: Comunas
  },
  {
    path: '/editar-comuna/:id',
    name: 'EditarComuna',
    component: EditarComuna
  },
  {
    path: '/add-comuna/',
    name: 'NewComuna',
    component: NewComuna
  },
  {
    path: '/municipios',
    name: 'Municipios',
    component: Municipios
  },
  {
    path: '/editar-municipio/:id',
    name: 'EditarMunicipio',
    component: EditarMunicipio
  },
  {
    path: '/add-municipio/',
    name: 'NewMunicipio',
    component: NewMunicipio
  },
  {
    path: '/departamentos/',
    name: 'Departamentos',
    component: Departamentos
  },
  {
    path: '/add-departamento/',
    name: 'NewDepartamento',
    component: NewDepartamento
  },
  {
    path: '/editar-departamento/:id',
    name: 'EditarDepartamento',
    component: EditarDepartamento
  },
  {
    path: '/paises/',
    name: 'Paises',
    component: Paises
  },
  {
    path: '/add-pais/',
    name: 'NewPais',
    component: NewPais
  },
  {
     path: '/editar-pais/:id',
     name: 'EditarPais',
     component: EditarPais
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
