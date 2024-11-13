import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  { path: '/', name: 'Home', component: HomeView },

  { path: '/dragons/:id', name: 'SingleDragon', component: () => import('../views/SingleDragonView.vue')
  },

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFoundView.vue') },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
