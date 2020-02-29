import { USER_ROUTES } from '@/modules/user/routes';
import { UserActionTypes } from '@/modules/user/stores/modules/user';
import { store } from '@/stores';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const createRouter = (routes: any[]) => {
  const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      ...routes.reduce((a, b) => a.concat(b), []),
      {
        path: '*',
        component: () => import('@/routes/not-found/not-found.route.vue')
      }
    ]
  });

  router.beforeEach((to, from, next) => {
    const isLoggedIn = store.getters[UserActionTypes.IS_LOGGED_IN];
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !isLoggedIn) next({ name: USER_ROUTES.SIGN_IN });
    else next();
  });

  return router;
};

export default createRouter;
