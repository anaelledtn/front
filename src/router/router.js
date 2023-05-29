import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home-v.vue'
import Login from '../components/Login.vue'
import Registration from '../components/Registration.vue'
import Favoris from '../views/Favoris-v.vue'
import Profil from '../views/Profil-v.vue'
import Envies from '../views/Envies-v.vue'

const routes = [{
    path:'/',
    name:'Home',
    component:Home
},
{
    path:'/login',
    name:'Login',
    component:Login
},
{
    path:'/registration',
    name:'Registration',
    component:Registration
},
{
    path:'/favoris',
    name:'Favoris',
    component:Favoris
},
{
    path:"/envies",
    name:'Envies',
    component:Envies
},
{
    path:'/profil',
    name:'Profil',
    component:Profil
}];

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;