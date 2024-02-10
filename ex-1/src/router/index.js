import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListeUtilisateurs from '../views/ListeUtilisateurs.vue'
import UserProfile from '../views/UserProfile.vue'
import FichePublications from '../views/FichePublications.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/liste-utilisateurs',
      name: 'liste-utilisateurs',
      component: ListeUtilisateurs
    },
    {
      path: '/user-profile',
      name: 'user-profile',
      component: UserProfile
    },
    {
      path: '/user-profile/:id',
      name: 'posts',
      component: FichePublications
    },


  ]
})

export default router
