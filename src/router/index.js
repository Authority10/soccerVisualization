import Vue from 'vue'
import VueRouter from "vue-router";

const Players = () =>import("../views/players/Players");
const Teams   = () =>import("../views/teams/Teams");
const Matches = () =>import("../views/matches/Matches");
const Try = () =>import("../views/login/Try");
const Welcome = () =>import("../views/welcome/Welcome");
const Login = () =>import("../views/welcome/Login");
const Register = () =>import("../views/welcome/Register");
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect:"/players"
  },
  // {
  //   path: '/',
  //   redirect:"/login"
  // },
  {
    path:"/welcome",
    component: Welcome,
  },
  {
    path:"/players",
    component: Players,
  },
  {
    path:"/players:teamID",
    component: Players,

  },
  {
    path: '/teams',
    component: Teams,
  },
  {
    path: '/matches',
    component: Matches
  },
  // {
  //   path: '/try',
  //   component: Try
  // },
  {
    path: '/login',
    component: Login
  },
  {
    path:'/register',
    component:Register
  }
];

const router =new VueRouter({
  routes,
  mode:"history"
});

export default router

