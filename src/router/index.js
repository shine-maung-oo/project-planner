import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddProject from '../views/AddProject.vue'
import EditProject from '../views/EditProject.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/addproject',
    name: 'addproject',
    component: AddProject
  },
  {
    path: '/editProject/:id',
    name: 'EditProject',
    component: EditProject,
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
