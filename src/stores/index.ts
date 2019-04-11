import { AppState } from '../main';
import { rootStore } from './root';
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

export let store: Store<AppState>;

const createStore = (modules: any[]) => {
  // More info about store: https://vuex.vuejs.org/en/core-concepts.html
  // See https://vuejs.org/guide/vuex-store#classic-mode
  // structure of the store:
  // types: Types that represent the keys of the mutations to commit
  // state: The information of our app, we can get or update it.
  // getters: Get complex information from state
  // action: Sync or async operations that commit mutations
  // mutations: Modify the state

  store = new Vuex.Store({
    state: rootStore.state() as any,
    getters: rootStore.getters,
    mutations: rootStore.mutations,
    actions: rootStore.actions as any,
    modules: modules.reduce((acc, module: any) => ({ ...acc, [module.name]: module }), {})
  });

  return store;
};

export default createStore;