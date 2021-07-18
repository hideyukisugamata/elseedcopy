import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Business from '../views/business.vue'
import Message from '../views/Message.vue'
import Company from '../views/Company.vue'
import Recruit from '../views/Recruit.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/business',
    name: 'Business',
    component: Business
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/company',
    name: 'Company',
    component: Company
  },
  {
    path: '/recruit',
    name: 'Recruit',
    component: Recruit
  },
  {
    path: '/contact',
    name: 'Contact',
    component:Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
