import Vue from 'vue'
import VueRouter from "vue-router";

const Players = () =>import("../views/players/Players");
const Teams   = () =>import("../views/teams/Teams");
const Matches = () =>import("../views/matches/Matches");

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect:"/players"
  },
  {
    // path: '/players',
    path:"/players:teamID",
    component: Players
  },
  {
    path:"/players",
    component: Players
  },
  {
    path: '/teams',
    component: Teams
  },
  {
    path: '/matches',
    component: Matches
  },
];

const router =new VueRouter({
  routes,
  mode:"history"
});

export default router

